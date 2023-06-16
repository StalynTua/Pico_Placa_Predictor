import express from 'express'
import picoPlacaRules from '../validator/picoPlaca.validator'

const router = express.Router()

router.get('/predictor', (req, res) => {
    const {error} = picoPlacaRules.validate(req.query);

    if (error) {
        return res.send({error: error?.details[0]?.message}).status(400);
    }

    const {plate, date } = req.query

    return res.send({plate, date})
})

export default router
