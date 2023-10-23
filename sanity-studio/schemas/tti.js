export default {
  title: 'TTI',
  name: 'tti',
  type: 'document',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Traits',
      name: 'traits',
      type: 'object',
      fields: [
        {title: 'Tourism', name: 'tourism', type: 'boolean'},
        {title: 'Recreation', name: 'recreation', type: 'boolean'},
        {title: 'Activity', name: 'activity', type: 'boolean'},
        {title: 'Pig', name: 'pig', type: 'boolean'},
      ],
    },
  ],
  preview: {
    select: {
      id: 'id',
      name: 'name',
      image: 'image',
    },
    prepare(selection) {
      const {id, name, image} = selection
      return {
        title: `[${id}] ${name}`,
        media: image,
      }
    },
  },
  orderings: [
    {
      title: 'ID',
      name: 'idAsc',
      by: [
        {
          field: 'id',
          direction: 'asc',
        },
      ],
    },
  ],
}
