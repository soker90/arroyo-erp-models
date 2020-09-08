const {
  paymentData,
  twoPayments,
} = require('../mocks/payment');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { PaymentModel } = models;
/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.provider)
    .toBe(mock.provider);
  expect(document.nameProvider)
    .toBe(mock.nameProvider);
  expect(document.invoices.toString())
    .toEqual(mock.invoices.toString());
  expect(document.nOrder)
    .toBe(mock.nOrder);
  expect(document.paymentDate)
    .toBe(mock.paymentDate);
  expect(document.merged)
    .toBe(mock.merged);
  expect(document.type)
    .toBe(mock.type);
  expect(document.amount)
    .toBe(mock.amount);
  expect(document.numCheque)
    .toBe(mock.numCheque);
  expect(document.paid)
    .toBe(mock.paid);
  expect(document.payments?.toString() || undefined)
    .toBe(mock.payments?.toString());
  expect(document.invoiceDate)
    .toBe(mock.invoiceDate);
  expect(document.nInvoice)
    .toBe(mock.nInvoice);
};

describe('payment model', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new payment', () => {
    beforeAll(() => PaymentModel.create(paymentData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await PaymentModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await PaymentModel.findOne();

      _checkCreated(document, paymentData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await PaymentModel.create(twoPayments.payments[0]);
      await PaymentModel.create(twoPayments.payments[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await PaymentModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await PaymentModel.find({});

      _checkCreated(documentList[0], twoPayments.payments[0]);
      _checkCreated(documentList[1], twoPayments.payments[1]);
    });
  });

});
