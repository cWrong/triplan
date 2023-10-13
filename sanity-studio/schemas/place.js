export default {
  Title: 'Place',
  name: 'place',
  type: 'document',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
      validation: (Rule) => Rule.required().unique(),
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().unique(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.unique(),
    },
    {
      title: 'Density',
      name: 'density',
      type: 'number',
    },
    {
      title: 'Review Score',
      name: 'reviewScore',
      type: 'number',
    },
    {
      title: 'Review Count',
      name: 'reviewCount',
      type: 'number',
    },
    {
      title: 'Recommend Time',
      name: 'recommendTime',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
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
  ],
  preview: {
    select: {
      id: 'id',
      name: 'name',
      address: 'address',
      image: 'image',
    },
    prepare(selection) {
      const {id, name, address, image} = selection
      return {
        title: `[${id}] ${name}`,
        subtitle: address,
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
