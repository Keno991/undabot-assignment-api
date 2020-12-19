import Joi from 'joi';

const validation = (schema, property) => {
    return (req, res, next) => {
        const { error } = Joi.validate(req.body, schema, { abortEarly: false });
        const valid = error == null;

        if (valid) {
            next();
        } else {
            const { details } = error;
            const errors = [];

            details.forEach(detail => {
                errors.push({ message: detail.message });
            })

            res.status(422).json({ errors })
        }
    }
}

const schemas = {
    contactData: Joi.object().keys({
        email: Joi.string().email().required(),
        message: Joi.string().min(31).required()
    }),
}

export {
    validation,
    schemas
}