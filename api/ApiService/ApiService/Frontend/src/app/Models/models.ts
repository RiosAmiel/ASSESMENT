export interface Cars {
  createdAt: string
  car: string
  stocks: number
  id: string
}

export interface Users {
    createdAt: string
    name: string
    avatar: string
    password: string
    email: string
    id: string
    job: string
}

export interface coreUsers {
    id: string
    fullname: string
    email: string
    password: string
    age: string
    birthplace: string
    occupation: string
}