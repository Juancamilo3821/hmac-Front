import {pool} from '../db.js'

export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
}

export const holamundo = async (req, res) => {
    const [result] = await pool.query('SELECT "HOLA MUNDO" AS result')
    res.json(result[0])
}