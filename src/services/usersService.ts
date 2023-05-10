import * as usersRepository from "../repositories/usersRepository.js";

export async function create(user: any) {
    const existingEmail = await usersRepository.getByEmail(user.email);
    const existingCPF = await usersRepository.getByCPF(user.CPF);
    if(existingEmail || existingCPF) throw { type: "error_conflict", message: "User already exists." };

    user.dateOfBirth = new Date(user.dateOfBirth);
    const newUser = await usersRepository.create(user);
    return newUser;
}

export async function get() {
    const users = await usersRepository.get();
    return users;
}