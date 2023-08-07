import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'title', // ? Social Title
      title: 'Title',
      description: 'Platform for social media',
      type: 'string',
    }),
    defineField({
      name: 'url', 
      title: 'Url',
      type: 'url',
    }),
  ],
})
