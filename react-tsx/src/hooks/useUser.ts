import { useState } from 'react'
import { User, UserFormData } from '../types/User'

const useUser = () => {
  const [users, setUsers] = useState<User[]>([])
  const [nextId, setNextId] = useState<number>(1)

  const addUser = (userData: UserFormData): void => {
    const newUser: User = {
      id: nextId,
      name: userData.name,
      email: userData.email,
      age: parseInt(userData.age),
      createdAt: new Date().toLocaleDateString()
    }
    setUsers([...users, newUser])
    setNextId(nextId + 1)
  }

  const deleteUser = (id: number): void => {
    setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id: number, updates: Partial<User>): void => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, ...updates } : user
    ))
  }

  return { users, addUser, deleteUser, updateUser }
}

export default useUser;