export default {
  name: "contacts",
  title: "Contacts",
  type: "document",
  initialValue: {
    hidden: false,
  },
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: "Email/ Mobile",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "contact",
      title: "Contact",
      type: "string",
      description: "For Mobile add with country code",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "hidden",
      title: "Hide from others",
      type: "boolean",
    },
  ],
};
