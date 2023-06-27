const about = {

  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      
      name: 'aboutTitle',
      title: 'Title',
      type: 'string',
      
    },
    {
      name: 'aboutDesc',
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
      name: 'aboutImage',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: 'true',
      },
    },
    {
      name: 'ourStory',
      title: 'Story Title',
      type: 'string',
    },
    {
      name: 'storyDesc',
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

export default about;