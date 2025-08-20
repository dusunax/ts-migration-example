// TypeScript 타입 정의
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: string;
}

export interface UserFormData {
  name: string;
  email: string;
  age: string;
}

export interface UserUpdate {
  name?: string;
  email?: string;
  age?: number;
}
