import { defineType, defineField } from 'sanity'

export const tarifsEvenements = defineType({
  name: 'tarifsEvenements',
  title: 'Tarifs événements',
  type: 'document',
  preview: {
    prepare() {
      return {
        title: 'Tarifs événements',
        subtitle: 'Anniversaires et team building',
      }
    },
  },
  fields: [
    defineField({
      name: 'anniversaireBase',
      title: 'Tarif anniversaire — forfait de base (€)',
      type: 'number',
      description: "Tarif pour le nombre d'enfants de base (ex : 350 €)",
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'anniversaireSeuilEnfants',
      title: "Nombre d'enfants inclus dans le forfait",
      type: 'number',
      description: "Nombre d'enfants pour lesquels le tarif de base s'applique (ex : 8)",
      validation: (R) => R.required().integer().positive(),
    }),
    defineField({
      name: 'anniversaireEnfantSupp',
      title: 'Tarif par enfant supplémentaire (€)',
      type: 'number',
      description: 'Tarif appliqué pour chaque enfant au-delà du seuil (ex : 35 €)',
      validation: (R) => R.required().positive(),
    }),
    defineField({
      name: 'teamBuildingMention',
      title: 'Tarif team building — mention',
      type: 'string',
      description: 'Phrase affichée à la place d\'un prix fixe (ex : "Sur mesure — devis personnalisé")',
      validation: (R) => R.required(),
    }),
  ],
})
