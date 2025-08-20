import { useState, ChangeEvent } from 'react'
import { User } from '../types/User'

interface UserListProps {
  users: User[]
  onDeleteUser: (id: number) => void
  onUpdateUser: (id: number, updates: Partial<User>) => void
}

interface EditData {
  name: string
  email: string
  age: string
}

function UserList({ users, onDeleteUser, onUpdateUser }: UserListProps) {
  const [editingUser, setEditingUser] = useState<number | null>(null)
  const [editData, setEditData] = useState<EditData>({
    name: '',
    email: '',
    age: ''
  })

  const startEdit = (user: User): void => {
    setEditingUser(user.id)
    setEditData({ 
      name: user.name, 
      email: user.email, 
      age: user.age.toString() 
    })
  }

  const cancelEdit = (): void => {
    setEditingUser(null)
    setEditData({ name: '', email: '', age: '' })
  }

  const saveEdit = (): void => {
    if (!editingUser) return
    
    const age = parseInt(editData.age)
    if (isNaN(age) || age <= 0) {
      alert('올바른 나이를 입력해주세요!')
      return
    }

    onUpdateUser(editingUser, {
      name: editData.name,
      email: editData.email,
      age
    })
    setEditingUser(null)
    setEditData({ name: '', email: '', age: '' })
  }

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setEditData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleDelete = (id: number): void => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      onDeleteUser(id)
    }
  }

  if (users.length === 0) {
    return (
      <div className="empty-state">
        <p>📝 아직 등록된 사용자가 없습니다.</p>
        <p>위 폼을 사용해서 사용자를 추가해보세요!</p>
      </div>
    )
  }

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="user-card">
          {editingUser === user.id ? (
            <div className="edit-form">
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleEditChange}
                placeholder="이름"
                required
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
                placeholder="이메일"
                required
              />
              <input
                type="number"
                name="age"
                value={editData.age}
                onChange={handleEditChange}
                placeholder="나이"
                min="1"
                max="120"
                required
              />
              <div className="edit-actions">
                <button onClick={saveEdit} className="save-btn" type="button">
                  저장
                </button>
                <button onClick={cancelEdit} className="cancel-btn" type="button">
                  취소
                </button>
              </div>
            </div>
          ) : (
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>📧 {user.email}</p>
              <p>🎂 {user.age}세</p>
              <p>📅 가입일: {user.createdAt}</p>
              <div className="user-actions">
                <button 
                  onClick={() => startEdit(user)} 
                  className="edit-btn"
                  type="button"
                >
                  수정
                </button>
                <button 
                  onClick={() => handleDelete(user.id)} 
                  className="delete-btn"
                  type="button"
                >
                  삭제
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default UserList
