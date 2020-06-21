import { Machine, assign } from 'xstate'
interface UserFetchStateSchema {
  idle: {}
  fetching: {}
  success: {}
  failure: {}
}

type UserFetchEvent = { type: 'FETCH_USERS' }

interface UserFetchContext {
  errorMessage?: string
  users: []
}

const fetchUsers = async () => {
  const userResponse = await fetch(
    'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/833079619'
  )
  const users = await userResponse.json()
  return users
}

export const userFetchMachine = Machine<
  UserFetchContext,
  UserFetchStateSchema,
  UserFetchEvent
>({
  id: 'userFetch',
  initial: 'idle',
  context: {
    errorMessage: undefined,
    users: []
  },
  states: {
    idle: {
      on: {
        FETCH_USERS: {
          target: 'fetching'
        }
      }
    },
    fetching: {
      invoke: {
        id: 'retrieveUsers',
        src: (context, event) => fetchUsers(),
        onDone: {
          target: 'success',
          actions: assign({ users: (context, event) => event.data })
        },
        onError: {
          target: 'failure',
          actions: assign({ errorMessage: (context, event) => event.data })
        }
      }
    },
    success: {
      on: {
        MORE_USERS: {
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
