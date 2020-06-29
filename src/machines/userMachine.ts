import { createMachine, assign, interpret } from 'xstate'

const fetchUsers = async () => {
  const userResponse = await fetch(
    'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/833079619'
  )
  const users = await userResponse.json()
  return users
}

interface User {
  unite_legale: {
    nom: string
    prenom_1: string
    etablissement_siege: {
      siret: string
      geo_adresse: string
    }
    date_debut: string
  }
}

interface UserContext {
  user?: User
  error?: string
}

type UserEvent = { type: 'FETCH_USERS' } | { type: 'RETRY' }

type UserState =
  | {
      value: 'idle'
      context: UserContext & {
        user: undefined
        error: undefined
      }
    }
  | {
      value: 'loading'
      context: UserContext
    }
  | {
      value: 'success'
      context: UserContext & { user: User; error: undefined }
    }
  | {
      value: 'failure'
      context: UserContext & { user: undefined; error: string }
    }

export const userFetchMachine = createMachine<
  UserContext,
  UserEvent,
  UserState
>({
  id: 'userFetch',
  initial: 'idle',
  context: {
    error: undefined,
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
          actions: assign({ error: (context, event) => event.data })
        }
      }
    },
    success: {
      on: {}
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
