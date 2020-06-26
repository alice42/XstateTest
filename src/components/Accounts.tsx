import * as React from 'react'
const Accounts = (props: {
  accounts: any[]
  handleClickAccount: (arg0: any) => void
}) => {
  return (
    <div>
      {props.accounts &&
        props.accounts.map(
          (
            account: { account_id: React.ReactNode },
            index: string | number | undefined
          ) => (
            <div
              key={index}
              onClick={() => {
                props.handleClickAccount(account.account_id)
              }}
            >
              {account.account_id}
            </div>
          )
        )}
    </div>
  )
}

export default Accounts
