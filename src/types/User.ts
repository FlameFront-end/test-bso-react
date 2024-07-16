export type User = {
  id: number
  username: string
  email: string
  provider: string
  confirmed: boolean
  blocked: boolean
  createdAt: string
  updatedAt: string
}

export type LoginResponse = {
  jwt: string
  user: User
}

export type RegisterRequest = {
  username: string
  email: string
  password: string
}

export type LoginRequest = {
  identifier: string
  password: string
}
