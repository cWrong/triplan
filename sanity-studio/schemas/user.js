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
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'CustomImage',
      name: 'customImage',
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
      customImage: 'customImage',
    },
    prepare(selection) {
      const {id, username, provider, customImage} = selection
      return {
        title: `[${id}] ${username}`,
        subtitle: provider,
        media: customImage,
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
