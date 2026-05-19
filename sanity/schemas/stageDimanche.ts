import { defineType, defineField } from 'sanity'

export const stageDimanche = defineType({
  name: 'stageDimanche',
  title: 'Stage dimanche',
  type: 'document',
  preview: { select: { title: 'date', subtitle: 'hours' } },
  fields: [
    defineField({
      name: 'date',
      title: 'Date',
      type: 'string',
      description: 'Ex : "5 octobre 2025"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Horaires',
      type: 'string',
      description: 'Ex : "11h30 / 15h30"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'tarifAdulte',
      title: 'Tarif adulte (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'tarifEnfant',
      title: 'Tarif enfant (€)',
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
