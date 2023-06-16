import Joi from 'joi';

const picoPlacaRules = Joi.object({
    plate: Joi.string().pattern(/[0-9]$/).required(),
    date: Joi.date().iso().required(),
});

export default picoPlacaRules