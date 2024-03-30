import * as Joi from 'joi'

export const register = Joi.object({
    email: Joi.string().email().required(),
    fullname: Joi.string().required(),
    password: Joi.string().required().pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$'))
    // min, max
.message('Password must be at least 8 characters long and contain at least one lowercase, one uppercase, and one number')
})

export const login = Joi.object({
    email : Joi.string().required(),
    password : Joi.string().required()
})
