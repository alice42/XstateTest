import * as React from 'react'
import styled from '@emotion/styled'

type TransactionsProps = {
  border: boolean
}
const StyledTransactions = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  border: 2px solid #836fe8;
  border-radius: 15px;
  background-color: #fcfcfc;
  color: #836fe8;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`
const StyledDiv = styled.div<TransactionsProps>`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${(props: TransactionsProps) =>
    props.border ? '2px solid #836fe8;' : 'none'};
`
const Transactions = (props: { subaccounts: any[] }) => {
  return (
    <StyledTransactions>
      {props.subaccounts &&
        props.subaccounts.map(
          (
            subaccount: {
              timestamp: React.ReactNode
              transaction_type: React.ReactNode
              transaction_category: string
              amount: React.ReactNode
              currency: React.ReactNode
            },
            index: string | number | undefined
          ) => (
            <StyledDiv
              key={index}
              border={index !== props.subaccounts.length - 1 || false}
            >
              <span>{subaccount.timestamp}</span>{' '}
              {subaccount.transaction_type === 'CREDIT' ? (
                <span>{subaccount.transaction_type}</span>
              ) : (
                <span>{`${
                  subaccount.transaction_type
                } (${subaccount.transaction_category.replace(
                  /_/g,
                  ' '
                )})`}</span>
              )}
              <span>{`${subaccount.amount} ${subaccount.currency}`}</span>
            </StyledDiv>
          )
        )}
    </StyledTransactions>
  )
}

export default Transactions
