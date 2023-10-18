export default {
  Title: 'Place',
  name: 'place',
  type: 'document',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
      validation: (Rule) => [Rule.required(), Rule.unique()],
    },
    {
      title: 'Path',
      name: 'path',
      type: 'string',
      validation: (Rule) => [Rule.required(), Rule.unique()],
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => [Rule.required(), Rule.unique()],
    },
    {
      title: 'Name(jp)',
      name: 'name_jp',
      type: 'string',
      validation: (Rule) => [Rule.required(), Rule.unique()],
    },
    {
      title: 'Country',
      name: 'country',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
    },
    {
      title: 'Province',
      name: 'province',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Type',
      name: 'type',
      type: 'array',
      of: [{type: 'string', validation: (Rule) => Rule.unique()}],
    },
    {
      title: 'Type(eng)',
      name: 'type_eng',
      type: 'array',
      of: [{type: 'string', validation: (Rule) => Rule.unique()}],
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
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Description(eng)',
      name: 'description_eng',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
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
