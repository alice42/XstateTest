import * as React from 'react'
import { subaccountFetchMachine } from '../machines/subaccountMachine'
import { useMachine } from '@xstate/react'

const Transactions = (props: { subaccounts: any[] }) => {
  return (
    <div>
      {props.subaccounts &&
        props.subaccounts.map(
          (
            subaccount: {
              timestamp: React.ReactNode
              transaction_type: React.ReactNode
              transaction_category: React.ReactNode
              amount: React.ReactNode
              currency: React.ReactNode
            },
            index: string | number | undefined
          ) => (
            <div key={index}>
              <span>{subaccount.timestamp}</span>{' '}
              <span>{subaccount.transaction_type}</span>{' '}
              <span>{subaccount.transaction_category}</span>{' '}
              <span>{subaccount.amount}</span>{' '}
              <span>{subaccount.currency}</span>{' '}
            </div>
          )
        )}
    </div>
  )
}

export default Transactions
