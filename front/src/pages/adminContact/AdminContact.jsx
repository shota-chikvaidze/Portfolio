import React from 'react'
import { userAuth } from '../../store/UserAuth'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getContact } from '../../api/endpoints/Contact'

export const AdminContact = () => {

  const navigate = useNavigate()
  const logout = userAuth((s) => s.clearAuth)


  const logoutFunc = () => {
    logout()
    navigate('/')
  }

  const {  data, isLoading, isError  } = useQuery({
    queryKey: ['get-contact'],
    queryFn: () => getContact()
  })

  const contacts = data?.contact || data || []

  if(isLoading) {
    return <p> Loading... </p>
  }

  if(isError) {
    return <p> Error laoding your contacts </p>
  }

  return (
    <>
      <div>AdminContact</div>
      <button onClick={logoutFunc}> Logout </button>



      <section>

        {contacts.map((con) => (
          <div>
            <p> {con.name} </p>
            <p> {con.email} </p>
            <p> {con.message} </p>
          </div>
        ))}

      </section>
    </>
  )
}
