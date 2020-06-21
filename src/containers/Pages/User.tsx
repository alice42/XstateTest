import * as React from 'react'
import { accountFetchMachine } from '../../machines/accountsMachine'
import { subaccountFetchMachine } from '../../machines/subaccountMachine'
import { userFetchMachine } from '../../machines/userMachine'

// import SubReddit from '../SubReddit.tsx'

import { useMachine } from '@xstate/react'

const User = () => {
  const [currentSubaccounts, sendSubaccount] = useMachine(
    subaccountFetchMachine
  )
  const [currentAccounts, sendAccount] = useMachine(accountFetchMachine)
  const [currentUser, sendUser] = useMachine(userFetchMachine)

  React.useEffect(
    () => {
      if (currentUser.matches('idle')) sendUser({ type: 'FETCH_USERS' })
    },
    [currentUser, sendUser]
  )
  React.useEffect(
    () => {
      if (currentUser.matches('idle')) sendAccount({ type: 'FETCH_ACCOUNTS' })
    },
    [currentAccounts, sendAccount]
  )
  const { accounts } = currentAccounts.context
  const { users } = currentUser.context
  const { subaccounts } = currentSubaccounts.context

  console.log('SUB in USER', subaccounts)

  const t = id => {
    console.log('FETCH')
    sendSubaccount('FETCH_SUBACCOUNT', { id: id })
  }
  return (
    <div>
      {users && users['unite_legale'] && (
        <div>
          <span>{users['unite_legale'].prenom_1}</span>{' '}
          <span>{users['unite_legale'].nom} </span>
        </div>
      )}
      {accounts &&
        accounts.map((account, index) => (
          <div
            key={index}
            onClick={() => {
              t(account.account_id)
            }}
          >
            {account.account_id}
          </div>
        ))}
      {subaccounts &&
        subaccounts.map((subaccount, index) => (
          <div key={index}>
            <span>{subaccount.timestamp}</span>{' '}
            <span>{subaccount.transaction_type}</span>{' '}
            <span>{subaccount.transaction_category}</span>{' '}
            <span>{subaccount.amount}</span> <span>{subaccount.currency}</span>{' '}
          </div>
        ))}
    </div>
  )
}

export default User
