import {createPool} from 'mysql2/promise'
import { 
    BD_USER,
    BD_PASSWORD,
    BD_HOST,
    BD_DATABASE,
    BD_PORT
 } from './config.js'

export const pool = createPool({
    host: BD_HOST,
    user: BD_USER,
    password: BD_PASSWORD,
    port: BD_PORT,
    database: BD_DATABASE
})