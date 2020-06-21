import { Machine, assign } from 'xstate'

interface SubaccountFetchStateSchema {
  idle: {}
  fetching: {}
  success: {}
  failure: {}
  id: string
}

type SubaccountFetchEvent = { type: 'FETCH_SUBACCOUNT'; id: string }

interface SubaccountFetchContext {
  errorMessage?: string
  subaccount: []
  subaccounts: []
}

const fetchSubaccounts = async (context: SubaccountFetchContext) => {
  const id = context.subaccount
  const subaccountResponse = await fetch(
    `https://kata.getmansa.com/accounts/${id}/transactions`
  )
  const subaccountsNoDate = await subaccountResponse.json()
  const from = subaccountsNoDate.timestamp
  let date = new Date(from)
  date.setDate(date.getDate() + parseInt(365))
  const to = date.toISOString()
  const subaccountResponseWithDate = await fetch(
    `https://kata.getmansa.com/accounts/${id}/transactions?from=${from}&to=${to}`
  )
  const subaccounts = await subaccountResponseWithDate.json()
  return subaccounts
}

export const subaccountFetchMachine = Machine<
  SubaccountFetchContext,
  SubaccountFetchStateSchema,
  SubaccountFetchEvent
>({
  id: 'subaccountFetch',
  initial: 'idle',
  context: {
    errorMessage: undefined,
    subaccounts: [],
    subaccount: []
  },
  states: {
    idle: {
      on: {
        FETCH_SUBACCOUNT: {
          target: 'fetching',
          actions: assign((context, event) => {
            console.log('TEST', context, event)
            let subaccount = event.id

            if (subaccount) {
              return {
                ...context,
                subaccount
              }
            }
          })
        }
      }
    },
    fetching: {
      invoke: {
        id: 'retrieveSubaccounts',
        src: (context, event) => fetchSubaccounts(context),
        onDone: {
          target: 'idle',
          actions: assign({
            subaccounts: (context: any, event: { data: any }) => event.data
          })
        },
        onError: {
          target: 'idle',
          actions: assign({ errorMessage: (context, event) => event.data })
        }
      }
    },
    success: {},
    failure: {}
  }
})
