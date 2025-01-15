import React from 'react'

export const ContactSponsor = (props) => {
  return (
    <div>
        <div>
        <h1>email : {props.email }</h1>
        <h1>name : {props.name }</h1>
        <h1>phone : {props.phone }</h1>
        </div>



    </div>
  )
}

export default ContactSponsor