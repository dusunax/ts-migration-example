interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
}

type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'age'>>;

class UserManager {
  private users: User[] = [];
  private nextId: number = 1;

  constructor() {
    console.log('🎯 TypeScript UserManager 초기화');
  }

  addUser(name: User['name'], email: User['email'], age: User['age']): User {
    const user: User = {
      id: this.nextId++,
      name,
      email,
      age,
      createdAt: new Date()
    };
    this.users.push(user);
    return user;
  }

  getUserById(id: User['id']): User | null {
    return this.users.find(user => user.id === id) || null;
  }

  updateUser(id: User['id'], updates: UserUpdate): User | null {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updates };
      return this.users[userIndex];
    }
    return null;
  }

  deleteUser(id: User['id']): User | null {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      return this.users.splice(userIndex, 1)[0];
    }
    return null;
  }

  getAllUsers(): User[] {
    return [...this.users];
  }

  getUsersByAge(minAge: number, maxAge: number): User[] {
    return this.users.filter(user => user.age >= minAge && user.age <= maxAge);
  }

  // 추가 메서드: 반환 타입
  getUserStatistics(): { total: number; averageAge: number; ageRange: { min: number; max: number } } {
    if (this.users.length === 0) {
      return { total: 0, averageAge: 0, ageRange: { min: 0, max: 0 } };
    }

    const ages = this.users.map(user => user.age);
    const total = this.users.length;
    const averageAge = ages.reduce((sum, age) => sum + age, 0) / total;
    const min = Math.min(...ages);
    const max = Math.max(...ages);

    return {
      total,
      averageAge: Math.round(averageAge * 100) / 100,
      ageRange: { min, max }
    };
  }
}

// 사용 예제
const userManager = new UserManager();
console.log('🚀 TypeScript User Manager 시작');

// 사용자 추가 (타입 안전성 보장)
userManager.addUser('김철수', 'kim@example.com', 25);
// userManager.addUser('이영희', 'lee@example.com', '서른'); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
// userManager.addUser('박민수'); // ❌ index.ts(19, 31): An argument for 'email' was not provided.

console.log('📝 사용자 추가 완료:', userManager.getAllUsers());

// 사용자 조회 (타입 안전성으로 undefined 체크)
const foundUser = userManager.getUserById(2);
if (foundUser) {
  console.log('🔍 ID 2 사용자 조회:', foundUser);
} else {
  console.log('❌ 사용자를 찾을 수 없습니다');
}

// 사용자 업데이트
const updatedUser = userManager.updateUser(1, { age: 26, email: 'kim.updated@example.com' });
console.log('✏️ 사용자 업데이트:', updatedUser);

// 나이로 필터링
const youngUsers = userManager.getUsersByAge(20, 25);
console.log('👥 20-25세 사용자:', youngUsers);

// 통계 기능
const stats = userManager.getUserStatistics();
console.log('📊 사용자 통계:', stats);

// 전체 사용자 출력
console.log('📋 전체 사용자 목록:', userManager.getAllUsers());

export { UserManager };
