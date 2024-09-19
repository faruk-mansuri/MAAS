import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const initialAuthState = () => {
  const savedAuthState = localStorage.getItem('isAuthenticated')
  return savedAuthState ? JSON.parse(savedAuthState) : false
}
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState)
  const [vendor, setVendor] = useState(null)
  console.log({ isAuthenticated })

  const login = () => {
    localStorage.setItem('isAuthenticated', JSON.stringify(true))
    setIsAuthenticated(true)
  }
  const logout = () => {
    localStorage.removeItem('isAuthenticated')
    setIsAuthenticated(false)
    setVendor(null)
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, vendor, setVendor }}
    >
      {children}
    </AuthContext.Provider>
  )
}
