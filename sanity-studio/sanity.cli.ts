import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '220707e0',
    dataset: process.env.SANITY_DATASET,
    // dataset: 'production'
  },
})
