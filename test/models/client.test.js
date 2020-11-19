const {
  clientData,
  twoClients,
} = require('../mocks/client');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { ClientModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document._id.toString())
    .toBe(mock._id);
  expect(document.address)
    .toBe(mock.address);
  expect(document.city)
    .toBe(mock.city);
  expect(document.postalCode)
    .toBe(mock.postalCode);
  expect(document.province)
    .toBe(mock.province);
  expect(document.email)
    .toBe(mock.email);
  expect(document.name)
    .toBe(mock.name);
  expect(document.phone)
    .toBe(mock.phone);
  expect(document.businessName)
    .toBe(mock.businessName);
  expect(document.cif)
    .toBe(mock.cif);
};

describe('client', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new client', () => {
    beforeAll(() => ClientModel.create(clientData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ClientModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ClientModel.findOne();

      _checkCreated(document, clientData);
    });
  });

  describe('Create multiple clients', () => {
    beforeAll(async () => {
      await ClientModel.create(twoClients.clients[0]);
      await ClientModel.create(twoClients.clients[1]);
    });

    // afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ClientModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check clients created', async () => {
      const documentList = await ClientModel.find({});

      _checkCreated(documentList[0], twoClients.clients[0]);
      _checkCreated(documentList[1], twoClients.clients[1]);
    });
  });

});
