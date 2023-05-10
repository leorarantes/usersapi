import { Users } from "@prisma/client";

import prisma from "../database.js";

export async function create(user: any) {
    await prisma.users.create({data: user});
}

export async function get() {
    const users: Users[] = await prisma.users.findMany();
    return users;
}

export async function getByCPF(CPF: string) {
    const user: Users = await prisma.users.findFirst({where: {
        CPF
    }});
    return user;
}

export async function getByEmail(email: string) {
    const user: Users = await prisma.users.findFirst({where: {
        email
    }});
    return user;
}