import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { codeInput } from '@sanity/code-input';

export default defineConfig({
  name: 'default',
  title: 'Fullstack_Sanity_Nextjs',

  projectId: 'nw3zpjls',
  dataset: 'production',

  plugins: [codeInput(),structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
