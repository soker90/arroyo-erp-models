const {
        deliveryOrderData,
        twoDeliveryOrder,
      } = require('../mocks');

const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {DeliveryOrderModel} = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.products.toString()).toBe(mock.products.toString());
  expect(document.provider).toBe(mock.provider);
  expect(document.nameProvider).toBe(mock.nameProvider);
  expect(document.date).toBe(mock.date);
  expect(document.size).toBe(mock.size);
  expect(document.total).toBe(mock.total);
  expect(document.iva).toBe(mock.iva);
  expect(document.rate).toBe(mock.rate);
  expect(document.re).toBe(mock.re);
  expect(document.taxBase).toBe(mock.taxBase);
  expect(document.nOrder).toBe(mock.nOrder);
  expect(document.nInvoice).toBe(mock.nInvoice);
}

describe('deliveryorder', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new delivery order', () => {
    beforeAll(() => Promise.all([
      DeliveryOrderModel.create(deliveryOrderData)
    ]));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await DeliveryOrderModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await DeliveryOrderModel.findOne();

      _checkCreated(document, deliveryOrderData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await DeliveryOrderModel.create(twoDeliveryOrder.orders[0]);
      await DeliveryOrderModel.create(twoDeliveryOrder.orders[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await DeliveryOrderModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check delivery orders created', async () => {
      const documentList = await DeliveryOrderModel.find({});

      _checkCreated(documentList[0], twoDeliveryOrder.orders[0]);
      _checkCreated(documentList[1], twoDeliveryOrder.orders[1]);
    });
  });

});
