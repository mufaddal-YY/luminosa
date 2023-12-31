export default {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "servicesTitle",
      type: "string",
      title: "Service Headline",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "serviceTitle",  maxLength: 200, },
     
    },
    {
      name: "thumbImage",
      type: "image",
      title: "Thumb Image",
      options: {
        hotspot: 'true',
      },
    },
    
    {
      name: "serviceDesc",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
        { type: "image" },
      ],
    },
    {
      name: "blockText",
      type: "string",
      title: "Conclusion",
    },
    {
      name: "image",
      type: "image",
      title: "Cover Image",
      options: {
        hotspot: 'true',
      },
    },
  ],
};
