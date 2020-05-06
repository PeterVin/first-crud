export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  groupId?: number;
  role?: string;
  password?: string;
  created_at?: string;
  updated_at?: string;   
}