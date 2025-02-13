import {
  getSecret
} from 'astro:env/server'

const host: string = getSecret('HOST') ?? 'http://localhost:1234' // string | undefined

export const envConfig = {
  host
}