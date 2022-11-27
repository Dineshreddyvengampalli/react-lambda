import App from './App.js'
import sls from 'serverless-http'

export const handler = sls(App)