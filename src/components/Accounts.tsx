import * as React from 'react'
import styled from '@emotion/styled'

const AccountCard = styled.div`
  width: 30%;
  border: 2px solid #836fe8;
  border-radius: 15px;
  background-color: #836fe8;
  color: #fcfcfc;
  padding: 25px;
  margin: 10px;
  font-size: initial;
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-between;
  }
`

const ListCard = styled.div`
  min-width: 100%%;
  display: flex;
  margin: 10px;
  flex-flow: row wrap;
  justify-content: space-around;
`

const Accounts = (props: {
  accounts: { account_id: React.ReactNode }[]
  handleClickAccount: (arg0: React.ReactNode) => void
}) => {
  console.log('props.accounts', props.accounts)
  return (
    <ListCard>
      {props.accounts &&
        props.accounts.map(account => (
          <AccountCard
            key={`account_${account.account_id}`}
            onClick={() => {
              props.handleClickAccount(account.account_id)
            }}
          >
            <div>
              <span>Account:</span>
              <span> {account.account_number}</span>
            </div>
            <div>
              <span>Balance: </span>
              <span>{`${account.current} ${account.currency}`}</span>
            </div>
          </AccountCard>
        ))}
    </ListCard>
  )
}

export default Accounts
