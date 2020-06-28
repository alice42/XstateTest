import * as React from 'react'
import styled from '@emotion/styled'

const UserCard = styled.div`
  margin: auto;
  width: 60%;
  margin-top: 20px;
  border: 2px solid #836fe8;
  border-radius: 15px;
  background-color: #fcfcfc;
  color: #836fe8;
  .user {
    padding: 15px;
    font-size: larger;
    font-weight: 800;
  }
  .compagny {
    & > span {
      line-height: 2;
    }
    text-align: start;
    padding: 15px;
  }
`
const User = (props: {
  user: {
    unite_legale: {
      nom: React.ReactNode
      prenom_1: React.ReactNode
      etablissement_siege: {
        siret: React.ReactNode
        geo_adresse: React.ReactNode
      }
      date_debut: React.ReactNode
    }
  }
}) => {
  return (
    <UserCard>
      {props.user && props.user.unite_legale && (
        <>
          <div className={'user'}>
            {`M. ${props.user.unite_legale.nom} ${
              props.user.unite_legale.prenom_1
            }`}
          </div>

          <div className={'compagny'}>
            <span>Company</span>
            <div>Name: MANSA Group</div>{' '}
            <div>
              {`Siret: ${props.user.unite_legale.etablissement_siege.siret}`}
            </div>
            <div>{`Starting date: ${props.user.unite_legale.date_debut}`}</div>
            <div>
              {`Address: ${
                props.user.unite_legale.etablissement_siege.geo_adresse
              }`}
            </div>
          </div>
        </>
      )}
    </UserCard>
  )
}

export default User
