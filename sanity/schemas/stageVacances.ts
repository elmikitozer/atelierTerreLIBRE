import { defineType, defineField } from 'sanity'

export const stageVacances = defineType({
  name: 'stageVacances',
  title: 'Stage vacances',
  type: 'document',
  preview: { select: { title: 'title', subtitle: 'dateRange' } },
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Ex : "Stage Toussaint", "Stage été juillet"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'dateRange',
      title: 'Dates',
      type: 'string',
      description: 'Ex : "du 7 au 11 juillet 2025"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Horaires',
      type: 'string',
      description: 'Ex : "10h – 12h"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'tarifEnfantSemaine',
      title: 'Tarif enfant — semaine (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'tarifEnfantSeance',
      title: 'Tarif enfant — séance (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'tarifAdulteSemaine',
      title: 'Tarif adulte — semaine (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'tarifAdulteSeance',
      title: 'Tarif adulte — séance (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      description: '1 = affiché en premier',
      validation: (R) => R.required().integer(),
    }),
  ],
})
