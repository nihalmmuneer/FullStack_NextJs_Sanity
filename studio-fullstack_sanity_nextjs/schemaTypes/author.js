import {UserIcon} from 'lucide-react'

export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  icon: UserIcon,
  fields: [
    {
      name: 'id',
      type: 'number',
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'username',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'image',
      type: 'file',
    },
    {
      name: 'bio',
      type: 'text',
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
}