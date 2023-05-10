import { Request, Response } from "express";

import * as usersService from "../services/usersService.js";

export async function create(req: Request, res: Response) {
    const user: any = req.body;
    const newUser: any = await usersService.create(user);
    res.status(201).send(newUser);
};

export async function get(req: Request, res: Response) {
    const users: any = await usersService.get();
    res.status(200).send(users);
};