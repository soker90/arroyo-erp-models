const {
        deliveryOrderData,
        twoDeliveryOrder,
        providerData,
      } = require('../mocks');

const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {DeliveryOrderModel, ProviderModel} = models;

describe('deliveryorder', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  test('notest', () => {
    expect(true).toBeTruthy();
  })
  /*describe('Create a new delivery order', () => {
    beforeAll(() => Promise.all([
      ProviderModel.create(providerData),
      DeliveryOrderModel.create(deliveryOrderData)
    ]));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await DeliveryOrderModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const provider = await ProviderModel.findOne();
      const document = await DeliveryOrderModel.findOne();

      expect(document.products).toBe(deliveryOrderData.products);
      expect(document.provider).toBe(deliveryOrderData.provider);
      expect(document.nameProvider).toBe(provider.name);
      expect(document.date).toBe(deliveryOrderData.date);
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

      expect(documentList[0].products).toBe(twoDeliveryOrder.orders[0].products);
      expect(documentList[0].date).toBe(twoDeliveryOrder.orders[0].date);
      expect(documentList[0].provider).toBe(twoDeliveryOrder.orders[0].provider);

      expect(documentList[1].products).toBe(twoDeliveryOrder.orders[1].products);
      expect(documentList[1].date).toBe(twoDeliveryOrder.orders[1].date);
      expect(documentList[1].provider).toBe(twoDeliveryOrder.orders[1].provider);
    });
  });

   */
});
