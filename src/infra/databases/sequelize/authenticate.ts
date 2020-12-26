import { CurrentAdmin } from 'admin-bro'
import argon2 from 'argon2'
import { UserModel } from '../../admin/resources/user/entities/sequelize'
import { env } from  './env'


export const authenticate = async (email, password): Promise<CurrentAdmin | null> => {
  const user = await UserModel.findOne({
    where: { email },
  })

  if (user && await argon2.verify(user.encryptedPassword, password)) {
    return {
      ...user.toJSON(),
      title: 'User',
      avatarUrl: `https://ui-avatars.com/api/?background=0D8ABC&color=fff&size=128&name=${email}`,
      email,
    }
  }
  return null
}

export const createAdmin = async (): Promise<void> => {
  const existingUser = await UserModel.findOne({
    where: { email: env.admin_email },
  })

  if (!existingUser) {
    await UserModel.create({
      email: env.admin_email as string,
      encryptedPassword: await argon2.hash(env.admin_password as string),
    })
  }
}