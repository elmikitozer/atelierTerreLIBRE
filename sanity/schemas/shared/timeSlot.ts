import { defineType, defineField } from 'sanity'

export const timeSlot = defineType({
  name: 'timeSlot',
  title: 'Créneau',
  type: 'object',
  fields: [
    defineField({
      name: 'day',
      title: 'Jour',
      type: 'text',
      description: 'Ex : "Lundi". Appuyez sur Entrée pour un saut de ligne.',
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
  preview: {
    select: { title: 'day', hours: 'hours' },
    prepare({ title, hours }: { title?: string; hours?: string[] }) {
      return {
        title: title ?? '—',
        subtitle: Array.isArray(hours) ? hours.filter(Boolean).join('  ·  ') : '',
      }
    },
  },
})
