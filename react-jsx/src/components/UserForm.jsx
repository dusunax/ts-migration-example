import { useState } from 'react'

function UserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.age) {
      alert('모든 필드를 입력해주세요!')
      return
    }

    onAddUser({
      name: formData.name,
      email: formData.email,
      age: parseInt(formData.age)
    })

    setFormData({ name: '', email: '', age: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="user-form">
      <div className="form-group">
        <label htmlFor="name">이름:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="이름을 입력하세요"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="email">이메일:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="이메일을 입력하세요"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="age">나이:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="나이를 입력하세요"
          min="1"
          max="120"
        />
      </div>
      
      <button type="submit" className="submit-btn">
        사용자 추가
      </button>
    </form>
  )
}

export default UserForm
