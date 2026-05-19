import { defineType, defineField } from 'sanity'

export const coursEnfants = defineType({
  name: 'coursEnfants',
  title: 'Cours enfants',
  type: 'document',
  fields: [
    defineField({
      name: 'minAge',
      title: 'Âge minimum',
      type: 'number',
      description: 'Âge minimum pour accéder aux cours (généralement 4 ans)',
      initialValue: 4,
      validation: (R) => R.required().integer().positive(),
    }),
    defineField({
      name: 'schedule',
      title: 'Créneaux',
      type: 'array',
      of: [{ type: 'timeSlot' }],
      description: 'Jours et horaires disponibles',
    }),
    defineField({
      name: 'prices',
      title: 'Tarifs',
      type: 'array',
      of: [{ type: 'price' }],
    }),
    defineField({
      name: 'essaiPossible',
      title: "Séance d'essai possible ?",
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
