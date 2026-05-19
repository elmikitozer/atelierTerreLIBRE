import { defineType, defineField } from 'sanity'

export const price = defineType({
  name: 'price',
  title: 'Tarif',
  type: 'object',
  fields: [
    defineField({
      name: 'duration',
      title: 'Label',
      type: 'string',
      description: 'Ex : "Trimestre", "Année", "Séance"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'amount',
      title: 'Montant (€)',
      type: 'number',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'unit',
      title: 'Unité (optionnel)',
      type: 'string',
      description: 'Ex : "/ trimestre", "/ an"',
    }),
  ],
})
