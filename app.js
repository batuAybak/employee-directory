import employees from '#db/employees'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello employees!')
})

app.get('/employees', (req, res) => {
    res.send(employees)
})

app.get('/employees/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * employees.length)
    res.send(employees[randomIndex])
})

app.get('/employees/:id', (req, res) => {
    const { id } = req.params
    employees[id] === undefined ? res.status(404).send('There is no employee with that id') : res.send(employees.find(emp => emp.id == id)) //or === +id
})

export default app
