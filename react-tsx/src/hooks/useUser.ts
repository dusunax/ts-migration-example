import { useState } from 'react'
import { User, UserFormData } from '../types/User'

const useUser = () => {
  const [users, setUsers] = useState<User[]>([])
  const [nextId, setNextId] = useState<User['id']>(1)

  const addUser = (userData: UserFormData) => {
    const newUser: User = {
      id: nextId,
      name: userData.name,
      email: userData.email,
      age: userData.age,
      createdAt: new Date().toLocaleDateString()
    }
    setUsers(prev => [...prev, newUser])
    setNextId(prev => prev + 1)
  }

  const deleteUser = (id: User['id']) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const updateUser = (id: User['id'], updates: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ))
  }

  return { 
    users, 
    addUser, 
    deleteUser, 
    updateUser 
  }
}

export default useUser;