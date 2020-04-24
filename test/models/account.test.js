/* eslint-disable max-len */
const Promise = require('bluebird');

const {
        createOneAccount,
        createTwoAccount,
      } = require('../account-data');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {AccountModel} = models;

describe('account', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new account', () => {
    beforeAll(() => AccountModel.create(createOneAccount));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await AccountModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await AccountModel.findOne();

      expect(document.username).toBe(createOneAccount.username);
      expect(document.password).toBeDefined();
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(() => (
      Promise.all([
        AccountModel.create(createTwoAccount.accounts[0]),
        AccountModel.create(createTwoAccount.accounts[1]),
      ])
    ));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await AccountModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('It should increment the id with each document', async () => {
      const documentList = await AccountModel.find();
      console.log(documentList);

      expect(documentList[0].username).toBe(createTwoAccount.accounts[0].username);
      expect(documentList[0].password).toBeDefined();
      expect(documentList[1].username).toBe(createTwoAccount.accounts[1].username);
      expect(documentList[1].password).toBeDefined();
    });
  });
});
