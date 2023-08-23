import { PrismaClient } from "@prisma/client";

declare global{
    namespace NodeJS{
        interface Global{}
    }
}

//add prisma to nodejs global type
interface CustomNodeJsGlobal extends NodeJS.Global{
    prisma: PrismaClient
}

//prev mult instances of prisma client in dev
declare const global: CustomNodeJsGlobal

const prisma  = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === "development") global.prisma = prisma

export default prisma