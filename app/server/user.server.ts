import bcrypt from 'bcryptjs'
import type { RegisterForm } from './types.server'
import { prisma } from './prisma.server'

export const createUser = async (user: RegisterForm) => {
  const passwordHash = await bcrypt.hash(user.password, 10)
  const newUser = await prisma.user.create({
    data: {
      email: user.email,
      passwordHash: passwordHash,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.username,
    },
  })

  return { id: newUser.id, email: newUser.email }
}
