import express from 'express'
import picoPlacaRoutes from './route/picoPlaca.routes'

const app = express()
app.use(express.json())

const PORT = 3000

app.use('/api/pico-placa', picoPlacaRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
