const {
        priceChangeData,
        twoPriceChange,
      } = require('../mocks/pricechange');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {PriceChangeModel} = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.product).toBe(mock.product);
  expect(document.productName).toBe(mock.productName);
  expect(document.date).toBe(mock.date);
  expect(document.price).toBe(mock.price);
  expect(document.diff).toBe(mock.diff);
  expect(document.deliveryOrder).toBe(mock.deliveryOrder);
  expect(document.read).toBe(mock.read);
};

describe('priceChange', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new price', () => {
    beforeAll(() => PriceChangeModel.create(priceChangeData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await PriceChangeModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await PriceChangeModel.findOne();

      _checkCreated(document, priceChangeData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await PriceChangeModel.create(twoPriceChange.priceChanges[0]);
      await PriceChangeModel.create(twoPriceChange.priceChanges[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await PriceChangeModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await PriceChangeModel.find({});

      _checkCreated(documentList[0], twoPriceChange.priceChanges[0]);
      _checkCreated(documentList[1], twoPriceChange.priceChanges[1]);
    });
  });

});
