import * as React from 'react'

const User = (props: {
  user: {
    unite_legale: {
      nom: React.ReactNode
      prenom_1: React.ReactNode
      etablissement_siege: {
        siret: React.ReactNode
        numero_voie: React.ReactNode
        type_voie: React.ReactNode
        libelle_voie: React.ReactNode
        code_postal: React.ReactNode
        libelle_commune: React.ReactNode
      }
      date_debut: React.ReactNode
    }
  }
}) => {
  return (
    <>
      {props.user && props.user.unite_legale && (
        <>
          <div>
            {`M. ${props.user.unite_legale.nom} ${
              props.user.unite_legale.prenom_1
            }`}
          </div>

          <div>
            <div>Company</div>
            <div>Name: MANSA Group</div>{' '}
            <div>
              {`Siret: ${props.user.unite_legale.etablissement_siege.siret}`}
            </div>
            <div>{`Starting date: ${props.user.unite_legale.date_debut}`}</div>
            <div>
              Address:{' '}
              {`${props.user.unite_legale.etablissement_siege.numero_voie} 
            ${props.user.unite_legale.etablissement_siege.type_voie} 
            ${props.user.unite_legale.etablissement_siege.libelle_voie} 
            ${props.user.unite_legale.etablissement_siege.code_postal} 
            ${props.user.unite_legale.etablissement_siege.libelle_commune} 
             `}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default User
