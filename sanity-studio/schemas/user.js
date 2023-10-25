export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'ID',
      name: 'id',
      type: 'number',
      validation: (Rule) => Rule.required(),
    },
    {
      // like email id
      title: 'Username',
      name: 'username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      // real name
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Nickname',
      name: 'nickname',
      type: 'string',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      title: 'ImageURL',
      name: 'imageUrl',
      type: 'string',
    },
    {
      title: 'Image',
      name: 'Image',
      type: 'image',
    },
    {
      title: 'Provider',
      name: 'provider',
      type: 'string',
    },
    {
      title: 'PWHash',
      name: 'pwHash',
      type: 'string',
    },
  ],
  preview: {
    select: {
      id: 'id',
      username: 'username',
      provider: 'provider',
      media: 'image',
    },
    prepare(selection) {
      const {id, username, provider, media} = selection
      return {
        title: `[${id}] ${username}`,
        subtitle: provider,
        media: media,
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
