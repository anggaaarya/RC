export default {
  name: 'transaction',
  type: 'document',
  title: 'Transaction',
  fields: [
    {
      name: 'statusBooking',
      type: 'boolean',
      title: 'Status Booking',
    },
    {
      name: 'methodPayment',
      type: 'string',
      title: 'Method Payment',
    },
    {
      name: 'user',
      type: 'reference',
      title: 'User',
      to: [{type: 'user'}],
    },
    {
      name: 'car',
      type: 'reference',
      title: 'Car',
      to: [{type: 'cars'}],
    },
  ],
}
