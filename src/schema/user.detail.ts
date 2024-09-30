import { Prisma } from "@prisma/client"

import { appDetailSchema } from "./app.detail"

import { convDetailSchema } from "./conv.detail"

export const userDetailSchema = Prisma.validator<Prisma.UserDefaultArgs>()({
  include: {
    evalApps: appDetailSchema,
    evalConvs: convDetailSchema,
  },
})
export type IUser = Prisma.UserGetPayload<typeof userDetailSchema>
