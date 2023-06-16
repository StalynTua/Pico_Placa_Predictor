import express from 'express'
import picoPlacaRules from '../validator/picoPlaca.validator'
import * as picoPlacaService from '../service/picoPlaca.service'

const router = express.Router()

router.get('/predictor', (req, res) => {
    const {error} = picoPlacaRules.validate(req.query);

    if (error) {
        return res.send({error: error?.details[0]?.message}).status(400);
    }

    const {plate, date } = req.query
    const canDrive = picoPlacaService.picoPlacaPrediction({plate: plate as string, date: date as string})

    return res.send(canDrive ? 'CIRCULA CON NORMALIDAD' : 'NO CIRCULA')
})

export default router
