import { defineType, defineField } from 'sanity'

export const coursAdultes = defineType({
  name: 'coursAdultes',
  title: 'Cours adultes',
  type: 'document',
  preview: {
    prepare() {
      return { title: "Cours adultes", subtitle: "Créneaux et tarifs hebdomadaires" }
    },
  },
  fields: [
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
      name: 'adulteSurCreneauEnfant',
      title: 'Adultes bienvenus sur les créneaux enfants ?',
      type: 'boolean',
      description: 'Affiche le message correspondant sur la page',
      initialValue: false,
    }),
  ],
})
