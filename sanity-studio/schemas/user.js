export default {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      // real name
      title: 'Name',
      name: 'name',
      type: 'string',
    },

    {
      title: 'Image',
      name: 'image',
      type: 'string',
    },
    {
      title: 'Nickname',
      name: 'nickname',
      type: 'string',
    },
    {
      title: 'CustomImage',
      name: 'customImage',
      type: 'image',
    },
    {
      name: 'emailVerified',
      type: 'datetime',
      hidden: true,
    },
  ],
  preview: {
    select: {
      email: 'email',
      name: 'name',
      nickname: 'nickname',
      image: 'image',
      customImage: 'customImage',
    },
    prepare(selection) {
      const {email, name, nickname, image, customImage} = selection
      return {
        title: email,
        subtitle: nickname ? `${name} (${nickname})` : `${name}`,
        media: customImage ? customImage : undefined,
      }
    },
  },
}
