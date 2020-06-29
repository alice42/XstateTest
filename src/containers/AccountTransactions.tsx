import * as React from 'react'
import User from '../components/User'
import Accounts from '../components/Accounts'
import Transactions from '../components/Transactions'
import { useMachine } from '@xstate/react'
import { accountFetchMachine } from '../machines/accountsMachine'
import { subaccountFetchMachine } from '../machines/subaccountMachine'
import { userFetchMachine } from '../machines/userMachine'
import { useParams } from 'react-router-dom'

const AccountTransactions = () => {
    const { id } = useParams()
    const [currentAccounts, sendAccount] = useMachine(accountFetchMachine)
    const [currentSubaccounts, sendSubaccount] = useMachine(
      subaccountFetchMachine
    )
    React.useEffect(
      () => {
        if (currentAccounts.matches('idle'))
          sendAccount({ type: 'FETCH_ACCOUNTS' })
      },
      [currentAccounts, sendAccount]
    )
    React.useEffect(
        () => {
          if (currentAccounts.matches('idle'))
          sendSubaccount('FETCH_SUBACCOUNTS', { id: id })
        },
        [currentSubaccounts, sendSubaccount]
      )
    const { accounts } = currentAccounts.context
    const { subaccounts } = currentSubaccounts.context
  console.log('Id a', id)
  return (
    <div>
      <Accounts
        accounts={accounts.filter(account => account.account_id === id)}
      /> 
      <Transactions subaccounts={subaccounts} />
    </div>
  )
}

export default AccountTransactions
