import {
  getSecret
} from 'astro:env/server'

// const host: string = getSecret('HOST') ?? 'http://localhost:1234' // string | undefined
const host = 'https://didactic-capybara-j9x55jgwrvwhpp4x-4322.app.github.dev'

export const envConfig = {
  host
}