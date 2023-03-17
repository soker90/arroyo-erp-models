const {
  productPvpData,
  twoProductPvp
} = require('../mocks/productpvp');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {ProductPvpModel} = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.product).toBe(mock.product);
  expect(document.date).toBe(mock.date);
  expect(document.price).toBe(mock.price);
};

describe('Product PVP', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new product pvp', () => {
    beforeAll(() => ProductPvpModel.create(productPvpData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ProductPvpModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ProductPvpModel.findOne();

      _checkCreated(document, productPvpData);
    });
  });

  describe('Create multiple product pvps', () => {
    beforeAll(async () => {
      await ProductPvpModel.create(twoProductPvp.prices[0]);
      await ProductPvpModel.create(twoProductPvp.prices[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ProductPvpModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ProductPvpModel.find({});

      _checkCreated(documentList[0], twoProductPvp.prices[0]);
      _checkCreated(documentList[1], twoProductPvp.prices[1]);
    });
  });

});
