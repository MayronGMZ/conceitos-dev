import { Request, Response } from 'express'

import createUser from './services/CreateUser'

export function User(req: Request, res: Response) {
  const user = createUser({
    name: 'Mayron Souza',
    email: 'mayrondrummer@gmail.com',
    password: '123456',
    techs: [
      'NodeJS',
      'React',
      'React Native',
      { title: 'JavaScript', experience: 100 }
    ]
  })

  return res.json(user)
}