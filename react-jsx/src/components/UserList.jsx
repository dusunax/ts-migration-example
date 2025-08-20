import { useState } from 'react'

function UserList({ users, onDeleteUser, onUpdateUser }) {
  const [editingUser, setEditingUser] = useState(null)
  const [editData, setEditData] = useState({})

  const startEdit = (user) => {
    setEditingUser(user.id)
    setEditData({ name: user.name, email: user.email, age: user.age })
  }

  const cancelEdit = () => {
    setEditingUser(null)
    setEditData({})
  }

  const saveEdit = () => {
    onUpdateUser(editingUser, {
      name: editData.name,
      email: editData.email,
      age: parseInt(editData.age)
    })
    setEditingUser(null)
    setEditData({})
  }

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    })
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
              />
              <input
                type="email"
                name="email"
                value={editData.email}
                onChange={handleEditChange}
                placeholder="이메일"
              />
              <input
                type="number"
                name="age"
                value={editData.age}
                onChange={handleEditChange}
                placeholder="나이"
              />
              <div className="edit-actions">
                <button onClick={saveEdit} className="save-btn">저장</button>
                <button onClick={cancelEdit} className="cancel-btn">취소</button>
              </div>
            </div>
          ) : (
            <div className="user-info">
              <h3>{user.name}</h3>
              <p>📧 {user.email}</p>
              <p>🎂 {user.age}세</p>
              <p>📅 가입일: {user.createdAt}</p>
              <div className="user-actions">
                <button onClick={() => startEdit(user)} className="edit-btn">
                  수정
                </button>
                <button 
                  onClick={() => onDeleteUser(user.id)} 
                  className="delete-btn"
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
