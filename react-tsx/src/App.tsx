import UserList from './components/UserList'
import UserForm from './components/UserForm'
import useUser from './hooks/useUser'
import './App.css'

function App() {
  const { users, addUser, deleteUser, updateUser } = useUser()

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎯 React TSX User Manager</h1>
        <p>TypeScript + React + TSX 예제</p>
      </header>
      
      <main className="app-main">
        <div className="app-section">
          <h2>새 사용자 추가</h2>
          <UserForm onAddUser={addUser} />
        </div>
        
        <div className="app-section">
          <h2>사용자 목록 ({users.length}명)</h2>
          <UserList 
            users={users} 
            onDeleteUser={deleteUser}
            onUpdateUser={updateUser}
          />
        </div>
      </main>
    </div>
  )
}

export default App
