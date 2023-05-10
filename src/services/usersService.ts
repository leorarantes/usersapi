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
    const formatedUsers = users.map((user) => {
        return {...user, dateOfBirth: getStrDate(user.dateOfBirth)};
    });
    return formatedUsers;
}

function getStrDate(date: Date) {
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day >= 10 ? day : '0' + day}/${month >= 10 ? month : '0' + month}/${year}`;
}