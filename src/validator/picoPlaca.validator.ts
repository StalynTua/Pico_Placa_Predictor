import Joi from 'joi';

const picoPlacaRules = Joi.object({
    plate: Joi.string().required(),
    date: Joi.date().iso().required(),
});

export default picoPlacaRules
