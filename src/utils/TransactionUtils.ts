import * as Joi from 'joi'

export const addTransaction = Joi.object({
    amount : Joi.number().required(),
    date : Joi.string().required(),
    category : Joi.string().required(),
    note : Joi.string()
})
