export interface User {
  id?: string;
  email: string;
  phone: string;
  name: string;
  age?: number;
  locale: string;
  isMissed: boolean;
  photoUrl?: string;
  description: string;
  dateMissing?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  visible?: boolean;
}

export interface UserParamsRequest {
  name?: string;
  id: string;
  limit: number;
  skip: number;
}

export interface UserResponse {
  user: User;
  limit: number;
  skip: number;
}

export enum ItemMenu {
  HOME = "HOME",
  MISSING = "MISSING",
  ONG = "ONG",
  FAQ = "FAQ",
}
