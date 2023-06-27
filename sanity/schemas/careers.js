export default {
    name: 'careers',
    title: 'Careers',
    type: 'document',
    fields: [
      {
        name: 'jobTitle',
        type: 'string',
        title: 'Job Title',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [
          {
            type: 'block',
          },
          { type: 'image' },
        ],
      },
    ],
  }
  