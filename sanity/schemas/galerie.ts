import { defineType, defineField } from 'sanity'

export const galerie = defineType({
  name: 'galerie',
  title: 'Galerie photo',
  type: 'document',
  preview: {
    select: {
      title: 'caption',
      media: 'image',
      subtitle: 'order',
    },
    prepare({ title, media, subtitle }) {
      return {
        title: title || 'Sans légende',
        subtitle: `Ordre : ${subtitle ?? '?'}`,
        media,
      }
    },
  },
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Photo affichée dans la galerie. Active le hotspot pour choisir le point central de recadrage.',
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'caption',
      title: 'Légende (optionnelle)',
      type: 'string',
      description: "Texte affiché en survol ou en accessibilité (alt). Si vide, alt par défaut sera utilisé.",
    }),
    defineField({
      name: 'order',
      title: "Ordre d'affichage",
      type: 'number',
      description: '1 = affiché en premier. Permet de réorganiser la galerie.',
      validation: (R) => R.required().integer(),
    }),
  ],
})
