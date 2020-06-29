import * as React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const AccountCard = styled(NavLink)`
  width: 30%;
  border: 2px solid #836fe8;
  border-radius: 15px;
  background-color: #836fe8;
  color: #fcfcfc;
  padding: 25px;
  margin: 10px;
  font-size: initial;
  display: flex;
  text-decoration: none;
  flex-direction: column;
  & > div {
    align-items: flex-start;
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
  accounts: {
    account_id: React.ReactNode
    account_number: React.ReactNode
    currency: React.ReactNode
    current: React.ReactNode
  }[]
}) => {
  console.log('props.accounts', props.accounts)
  return (
    <ListCard>
      {props.accounts &&
        props.accounts.map(account => (
          <AccountCard
            key={`account_${account.account_id}`}
            to={`account/${account.account_id}`}
          >
            <div>
              <span>Account:</span>
              <span>{account.account_number}</span>
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
