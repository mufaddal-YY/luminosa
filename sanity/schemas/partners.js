export default {
  name: 'partners',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Banner Headline',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'partners',
      type: 'array',
      title: 'Partners',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              option: {
                hotspot: 'true',
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'supportText',
      type: 'string',
      title: 'Support Text',
    },
    {
      name: 'support',
      type: 'array',
      title: 'Support',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'supportTitle',
              title: 'Support Title',
              type: 'string',
            },
            {
              name: 'supportDescription',
              title: 'Support Description',
              type: 'string',
            },
            {
              name: 'time',
              title: 'Time',
              type: 'string',
            },
            {
              name: 'contact',
              title: 'Contact',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
            {
              name: 'supportImage',
              type: 'image',
              title: 'Image',
              option: {
                hotspot: 'true',
              },
            },
            
          ],
        },
      ],
    },
  ],
}
