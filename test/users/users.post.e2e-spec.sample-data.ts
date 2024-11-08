import { faker } from '@faker-js/faker';

export const sampleCompleteUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password123#',
};

export const sampleMissingFirstNameUser = {
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  password: 'Password123#',
};

export const sampleMissingEmailUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  password: 'Password123#',
};

export const sampleMissingPasswordUser = {
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
};
