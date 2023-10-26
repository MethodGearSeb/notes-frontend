import { defineConfig } from 'cypress'
import fs from 'fs'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) =>
        fs.unlinkSync(results.video)
      )
    },
    baseUrl: 'http://localhost:5173',
    env: {
      BACKEND: 'http://localhost:3001/api'
    },
  },
})
