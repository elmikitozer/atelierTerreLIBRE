import { defineType, defineField } from 'sanity'

export const rentree = defineType({
  name: 'rentree',
  title: 'Rentrée',
  type: 'document',
  preview: {
    prepare() {
      return { title: "Rentrée", subtitle: "Dates de rentrée — adultes et enfants" }
    },
  },
  fields: [
    defineField({
      name: 'dateAdultes',
      title: 'Date de rentrée — Adultes',
      type: 'string',
      description: 'Ex : "Lundi 9 septembre 2025"',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'dateEnfants',
      title: 'Date de rentrée — Enfants',
      type: 'string',
      description: 'Ex : "Mercredi 11 septembre 2025"',
      validation: (R) => R.required(),
    }),
  ],
})
