import { config } from "dotenv"

config()

export const PORT = process.env.PORT || 3000
export const BD_USER = process.env.BD_USER || 'usuario1'
export const BD_PASSWORD = process.env.BD_PASSWORD || 'Mncdm2023.'
export const BD_HOST = process.env.BD_HOST || '10.152.164.136'
export const BD_DATABASE = process.env.BD_DATABASE || 'hmac'
export const BD_PORT = process.env.DB_PORT || 3306