const {
        productData,
        twoProducts,
      } = require('../mocks/product');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {ProductModel} = models;

describe('product', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new product', () => {
    beforeAll(() => ProductModel.create(productData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ProductModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ProductModel.findOne();

      expect(document.code).toBe(productData.code);
      expect(document.name).toBe(productData.name);
      expect(document.provider).toBe(productData.provider);
      expect(document.fee).toBe(productData.fee);
      expect(document.iva).toBe(productData.iva);
      expect(document.re).toBe(productData.re);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await ProductModel.create(twoProducts.products[0]);
      await ProductModel.create(twoProducts.products[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ProductModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ProductModel.find({});

      expect(documentList[0].code).toBe(twoProducts.products[0].code);
      expect(documentList[0].name).toBe(twoProducts.products[0].name);
      expect(documentList[0].provider).toBe(twoProducts.products[0].provider);
      expect(documentList[0].fee).toBe(twoProducts.products[0].fee);
      expect(documentList[0].iva).toBe(twoProducts.products[0].iva);
      expect(documentList[0].re).toBe(twoProducts.products[0].re);

      expect(documentList[1].code).toBe(twoProducts.products[1].code);
      expect(documentList[1].name).toBe(twoProducts.products[1].name);
      expect(documentList[1].provider).toBe(twoProducts.products[1].provider);
      expect(documentList[1].fee).toBe(twoProducts.products[1].fee);
      expect(documentList[1].iva).toBe(twoProducts.products[1].iva);
      expect(documentList[1].re).toBe(twoProducts.products[1].re);
    });
  });

});
