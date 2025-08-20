import { useState } from 'react'

/**
 * 사용자 관리를 위한 커스텀 훅
 * JavaScript 버전 - 타입 검사 없음
 */
function useUser() {
  const [users, setUsers] = useState([])
  const [nextId, setNextId] = useState(1)

  const addUser = (userData) => {
    const newUser = {
      id: nextId,
      ...userData,
      createdAt: new Date().toLocaleDateString()
    }
    setUsers(prevUsers => [...prevUsers, newUser])
    setNextId(prevId => prevId + 1)
  }

  const deleteUser = (id) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
  }

  const updateUser = (id, updates) => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === id ? { ...user, ...updates } : user
      )
    )
  }

  return {
    users,
    addUser,
    deleteUser,
    updateUser
  }
}

export default useUser
