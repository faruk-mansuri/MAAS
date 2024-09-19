import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const RedirectRoute = ({ element }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Navigate to='/' replace /> : element
}

export default RedirectRoute
