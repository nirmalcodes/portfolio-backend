export default {
  name: "services",
  title: "Services",
  type: "document",
  initialValue: {
    hidden: false,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      validation: Rule => [
        Rule.required().min(50).error('A Description of min. 50 characters is required'),
        Rule.required().max(150).error('Try to make it short and sweet')
      ]
    },
    {
      name: "hidden",
      title: "Hide from others",
      type: "boolean",
    },
  ],
};
