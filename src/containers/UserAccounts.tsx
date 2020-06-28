import * as React from 'react'
import User from '../components/User'
import Accounts from '../components/Accounts'
import Transactions from '../components/Transactions'
import { useMachine } from '@xstate/react'
import { accountFetchMachine } from '../machines/accountsMachine'
import { subaccountFetchMachine } from '../machines/subaccountMachine'
import { userFetchMachine } from '../machines/userMachine'

const UserAccount = () => {
  const [currentAccounts, sendAccount] = useMachine(accountFetchMachine)
  const [currentSubaccounts, sendSubaccount] = useMachine(
    subaccountFetchMachine
  )
  const [currentUser, sendUser] = useMachine(userFetchMachine)

  React.useEffect(
    () => {
      if (currentUser.matches('idle')) sendUser({ type: 'FETCH_USERS' })
    },
    [currentUser, sendUser]
  )
  const { user } = currentUser.context
  const { subaccounts } = currentSubaccounts.context

  React.useEffect(
    () => {
      if (currentAccounts.matches('idle'))
        sendAccount({ type: 'FETCH_ACCOUNTS' })
    },
    [currentAccounts, sendAccount]
  )
  const { accounts } = currentAccounts.context

  const handleClickAccount = (id: string) => {
    sendSubaccount('FETCH_SUBACCOUNTS', { id: id })
  }
  return (
    <div>
      <User user={user} />
      <Accounts accounts={accounts} handleClickAccount={handleClickAccount} />
      <Transactions subaccounts={subaccounts} />
    </div>
  )
}

export default UserAccount
