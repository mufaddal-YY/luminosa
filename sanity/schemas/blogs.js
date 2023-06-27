export default {
    name: 'blogs',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
        },
        validation: Rule => Rule.required(),
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          { type: 'block' },
          { type: 'image' },
          
        ],
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
        validation: Rule => Rule.required(),
      },
    ],
    initialValue: {
      publishedAt: new Date().toISOString(),
    },
    preview: {
      select: {
        title: 'title',
        authorName: 'author.name',
        media: 'coverImage',
      },
      prepare({ title, authorName, media }) {
        return {
          title,
          subtitle: authorName,
          media,
        };
      },
    },
  };