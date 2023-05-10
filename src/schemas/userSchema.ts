import joi from "joi";

const signInSchema = joi.object({
    name: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    phone: joi.string().required(),
    address1: joi.string().required(),
    address2: joi.string().required(),
    CEP: joi.string().required(),
    CPF: joi.string().required(),
    dateOfBirth: joi.string().required(),
    income: joi.number().required()
});

export default signInSchema;