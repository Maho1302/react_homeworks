import Joi from "joi";

const carValidator = Joi.object( {
    // model:Joi.string().min(2).max(20).required().messages({
    //     'string.empty': 'Model can not be empty',
    //     'string.min': 'Model must be min 2 letters'
    // }),
    model:Joi.string().regex(/^[a-zA-Z-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base':'Only letters min:1 max:20'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
})

export {
    carValidator
}