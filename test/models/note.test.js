const {
  noteData,
  twoNotes,
} = require('../mocks/note');

const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { NoteModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.date)
    .toBe(mock.date);
  expect(document.message)
    .toBe(mock.message);
};

describe('note', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new note', () => {
    beforeAll(() => NoteModel.create(noteData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await NoteModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await NoteModel.findOne();

      _checkCreated(document, noteData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await NoteModel.create(twoNotes.notes[0]);
      await NoteModel.create(twoNotes.notes[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await NoteModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await NoteModel.find({});

      _checkCreated(documentList[0], twoNotes.notes[0]);
      _checkCreated(documentList[1], twoNotes.notes[1]);
    });
  });

});
