export default {
  name: 'user',
  type: 'document',
  title: 'User',
  readOnly: true,
  fields: [
    {
      name: 'email',
      type: 'string',
      title: 'Email',
      readOnly: true,
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      readOnly: true,
    },
    {
      name: 'password',
      type: 'string',
      title: 'Password',
      readOnly: true,
    },
    {
      name: 'numberPhone',
      type: 'string',
      title: 'Number Phone',
      readOnly: true,
    },
    {
      name: 'username',
      type: 'string',
      title: 'Username',
      readOnly: true,
    },
  ],
}
