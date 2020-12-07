const {
  billingData,
  twoBilling,
  billingUpdate,
} = require('../mocks/billing');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { BillingModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.year)
    .toBe(mock.year);
  expect(document.provider)
    .toBe(mock.provider);
  expect(document.trimesters.toString())
    .toEqual(mock.trimesters.toString());
};

/**
 * Return only field necessary for create billing
 * @param {Object} billing
 * @returns {{year: (Object.year|StringConstructor|string), trimesters: (Object.trimesters|[]), provider: (Object.provider|StringConstructor)}}
 * @private
 */
const _getParamsCreate = billing => ({
  year: billing.year,
  trimesters: billing.trimesters,
  provider: billing.provider,
});

describe('billing', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new billing', () => {
    beforeAll(() => BillingModel.create(_getParamsCreate(billingData)));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await BillingModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await BillingModel.findOne();

      _checkCreated(document, billingData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await BillingModel.create(_getParamsCreate(twoBilling.billing[0]));
      await BillingModel.create(_getParamsCreate(twoBilling.billing[1]));
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await BillingModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await BillingModel.find({});

      _checkCreated(documentList[0], twoBilling.billing[0]);
      _checkCreated(documentList[1], twoBilling.billing[1]);
    });
  });

});
