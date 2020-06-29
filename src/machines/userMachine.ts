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
  user: {
    unite_legale: {
      nom: React.ReactNode
      prenom_1: React.ReactNode
      etablissement_siege: {
        siret: React.ReactNode
        geo_adresse: React.ReactNode
      }
      date_debut: React.ReactNode
    }
  }
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
    user: {
      unite_legale: {
        nom: '',
        prenom_1: '',
        etablissement_siege: {
          siret: '',
          geo_adresse: ''
        },
        date_debut: ''
      }
    }
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
        id: 'retrieveUser',
        src: (context, event) => fetchUsers(),
        onDone: {
          target: 'success',
          actions: assign({ user: (context, event) => event.data })
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
