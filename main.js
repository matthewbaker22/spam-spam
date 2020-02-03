import customers from './customers.js'

const emails = customers.map((customer) => customer.contacts.email)

console.log(emails)