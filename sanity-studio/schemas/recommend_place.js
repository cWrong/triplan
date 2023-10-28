export default {
  Title: 'RecommendPlace',
  name: 'recommendPlace',
  type: 'document',
  fields: [
    {
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{type: 'user'}],
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Places',
      name: 'places',
      type: 'array',
      of: [
        {
          title: 'RecommendInfo',
          name: 'recommendInfo',
          type: 'object',
          fields: [
            {
              title: 'Place',
              name: 'place',
              type: 'reference',
              to: [{type: 'place'}],
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Fitness',
              name: 'fitness',
              type: 'number',
              validation: (Rule) => Rule.required().min(0).max(100),
            },
            {
              title: 'Star',
              name: 'star',
              type: 'boolean',
              validation: (Rule) => Rule.required(),
              initialValue: false,
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      user: 'user',
      places: 'places',
    },
    prepare(selection) {
      const {user, places} = selection
      return {
        title: `[${user.name}]`,
        subtitle: `${places.length} places`,
      }
    },
  },
}
