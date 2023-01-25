import { z } from 'zod'

export const UserSchema = z.object({
  firstName: z.string().min(3).max(255),
  lastName: z.string().min(3).max(255),
  timeZone: z.string().min(1),
  language: z.string().min(1).max(20)
})

export type IUser = z.infer<typeof UserSchema>
