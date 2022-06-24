const {
        priceData,
        twoPrices,
      } = require('../mocks/price');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {PriceModel} = models;

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
  expect(document.cost).toBe(mock.cost);
  expect(document.deliveryOrder).toBe(mock.deliveryOrder);
  expect(document.invoice).toBe(mock.invoice);
};

describe('price', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new price', () => {
    beforeAll(() => PriceModel.create(priceData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await PriceModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await PriceModel.findOne();

      _checkCreated(document, priceData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await PriceModel.create(twoPrices.prices[0]);
      await PriceModel.create(twoPrices.prices[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await PriceModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await PriceModel.find({});

      _checkCreated(documentList[0], twoPrices.prices[0]);
      _checkCreated(documentList[1], twoPrices.prices[1]);
    });
  });

});
