import * as React from 'react'
import User from '../components/User'
import Accounts from '../components/Accounts'
import Transactions from '../components/Transactions'
import { useMachine } from '@xstate/react'
import { accountFetchMachine } from '../machines/accountsMachine'
import { userFetchMachine } from '../machines/userMachine'

const UserAccount = () => {
  const [currentUser, sendUser] = useMachine(userFetchMachine)
  const [currentAccounts, sendAccount] = useMachine(accountFetchMachine)

  React.useEffect(
    () => {
      if (currentUser.matches('idle')) sendUser({ type: 'FETCH_USERS' })
    },
    [currentUser, sendUser]
  )

  React.useEffect(
    () => {
      if (currentAccounts.matches('idle'))
        sendAccount({ type: 'FETCH_ACCOUNTS' })
    },
    [currentAccounts, sendAccount]
  )

  const { user } = currentUser.context
  const { accounts } = currentAccounts.context

  return (
    <div>
      <User user={user} />
      <Accounts accounts={accounts} />
    </div>
  )
}

export default UserAccount
