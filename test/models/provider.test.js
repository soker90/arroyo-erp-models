const {
        providerData,
        twoProviders,
      } = require('../mocks/provider');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {ProviderModel} = models;

describe('provider', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new provider', () => {
    beforeAll(() => ProviderModel.create(providerData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ProviderModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ProviderModel.findOne();

      expect(document._id.toString()).toBe(providerData._id);
      expect(document.address).toBe(providerData.address);
      expect(document.email).toBe(providerData.email);
      expect(document.name).toBe(providerData.name);
      expect(document.phone).toBe(providerData.phone);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await ProviderModel.create(twoProviders.providers[0]);
      await ProviderModel.create(twoProviders.providers[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ProviderModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ProviderModel.find({});

      expect(documentList[0].address).toBe(twoProviders.providers[0].address);
      expect(documentList[0].email).toBe(twoProviders.providers[0].email);
      expect(documentList[0].name).toBe(twoProviders.providers[0].name);
      expect(documentList[0].phone).toBe(twoProviders.providers[0].phone);

      expect(documentList[1].address).toBe(twoProviders.providers[1].address);
      expect(documentList[1].email).toBe(twoProviders.providers[1].email);
      expect(documentList[1].name).toBe(twoProviders.providers[1].name);
      expect(documentList[1].phone).toBe(twoProviders.providers[1].phone);
    });
  });

});
