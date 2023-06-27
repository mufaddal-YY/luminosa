export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'serviceTitle',
      type: 'string',
      title: 'Service Headline',
    },
    {
      name: 'serviceDesc',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        { type: 'image' },
          
      ],
    },
    {
      name: 'blockText',
      type: 'string',
      title: 'Conclusion',
    },
  ],
}
