class UserManager {
  constructor() {
    this.users = [];
    this.nextId = 1;
  }

  addUser(name, email, age) {
    const user = {
      id: this.nextId++,
      name: name,
      email: email,
      age: age,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  getUserById(id) {
    return this.users.find(user => user.id === id);
  }

  updateUser(id, updates) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updates };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id) {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex, 1)[0];
    }
    return null;
  }

  getAllUsers() {
    return this.users;
  }

  getUsersByAge(minAge, maxAge) {
    return this.users.filter(user => user.age >= minAge && user.age <= maxAge);
  }
}

// 사용 예제
const userManager = new UserManager();
console.log('🚀 JavaScript User Manager 시작');

// 사용자 추가
userManager.addUser('김철수', 'kim@example.com', 25);
userManager.addUser('이영희', 'lee@example.com', '서른');
userManager.addUser('박민수');

console.log('📝 사용자 추가 완료:', userManager.getAllUsers());

// 사용자 조회
const foundUser = userManager.getUserById(2);
console.log('🔍 ID 2 사용자 조회:', foundUser);

// 사용자 업데이트
const updatedUser = userManager.updateUser(1, { age: 26, email: 'kim.updated@example.com' });
console.log('✏️ 사용자 업데이트:', updatedUser);

// 나이로 필터링
const youngUsers = userManager.getUsersByAge(20, 25);
console.log('👥 20-25세 사용자:', youngUsers);

// 전체 사용자 출력
console.log('📋 전체 사용자 목록:', userManager.getAllUsers());

export { UserManager };
