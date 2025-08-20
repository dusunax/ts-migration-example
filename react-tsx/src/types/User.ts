export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: string;
}

export type UserFormData = Pick<User, 'name' | 'email' | 'age'>;
export type UserUpdate = Partial<Pick<User, 'name' | 'email' | 'age'>>;
