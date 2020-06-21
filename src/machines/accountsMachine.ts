import { Machine, assign } from 'xstate'
interface AccountFetchStateSchema {
  idle: {}
  fetching: {}
  success: {}
  failure: {}
}

type AccountFetchEvent = { type: 'FETCH_ACCOUNTS' }

interface AccountFetchContext {
  errorMessage?: string
  accounts: []
}

const fetchAccounts = async () => {
  const accountResponse = await fetch('https://kata.getmansa.com/accounts')
  const accounts = await accountResponse.json()
  return accounts
}

export const accountFetchMachine = Machine<
  AccountFetchContext,
  AccountFetchStateSchema,
  AccountFetchEvent
>({
  id: 'accountFetch',
  initial: 'idle',
  context: {
    errorMessage: undefined,
    accounts: []
  },
  states: {
    idle: {
      on: {
        FETCH_ACCOUNTS: {
          target: 'fetching'
        }
      }
    },
    fetching: {
      invoke: {
        id: 'retrieveAccounts',
        src: (context, event) => fetchAccounts(),
        onDone: {
          target: 'success',
          actions: assign({ accounts: (context, event) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ errorMessage: (context, event) => event.data })
        }
      }
    },
    success: {
      on: {
        MORE_ACCOUNTS: {
          target: 'fetching'
        }
      }
    },
    failure: {
      on: {
        RETRY: {
          target: 'fetching'
        }
      }
    }
  }
})
