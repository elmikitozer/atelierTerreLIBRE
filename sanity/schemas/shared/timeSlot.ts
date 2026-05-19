import { defineType, defineField } from 'sanity'

export const timeSlot = defineType({
  name: 'timeSlot',
  title: 'Créneau',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Jour',
      type: 'string',
      description: 'Ex : "Lundi", "Mercredi"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'hours',
      title: 'Horaires',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Ex : "9h30 – 11h30", "14h – 16h"',
    }),
  ],
})
