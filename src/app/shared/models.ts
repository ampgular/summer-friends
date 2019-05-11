

export interface Friends {
  id:number,
  name: string
}

export interface Friend  {
  id: string,
  picture:string,
  age: number,
  eyeColor: string
  name: string,
  gender: string,
  company: string,
  email: string,
  phone: string,
  address:string,
  about: string,
  friends: Array<Friends>
}
