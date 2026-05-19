import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { projectId, dataset, apiVersion } from './sanity/env'

const SINGLETONS = ['rentree', 'coursEnfants', 'coursAdultes'] as const
type Singleton = typeof SINGLETONS[number]

export default defineConfig({
  name: 'atelier-terre-libre',
  title: 'Atelier Terre Libre — Édition',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list().title('Contenu').items([
          S.listItem().title('Rentrée')
            .child(S.document().schemaType('rentree').documentId('rentree')),
          S.listItem().title('Cours enfants')
            .child(S.document().schemaType('coursEnfants').documentId('coursEnfants')),
          S.listItem().title('Cours adultes')
            .child(S.document().schemaType('coursAdultes').documentId('coursAdultes')),
          S.divider(),
          S.documentTypeListItem('stageVacances').title('Stages vacances'),
          S.documentTypeListItem('stageDimanche').title('Stages dimanche'),
        ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !SINGLETONS.includes(schemaType as Singleton)),
  },
  document: {
    actions: (prev, { schemaType }) => {
      if (SINGLETONS.includes(schemaType as Singleton)) {
        return prev.filter(({ action }) => action !== 'delete' && action !== 'unpublish')
      }
      return prev
    },
  },
})
