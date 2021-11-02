import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'next';
import { server } from './mocks/server';

beforeAll(() => server.listen());
// reset any request handlers that are declared as a part of our tests
// (i.e. for testing one-time error scenarios)
afterEach(() => server.resetHandlers());
// clean up once the tests are done
afterAll(() => server.close());

module.exports = async () => {
  process.env.TZ = 'UTC';
};
