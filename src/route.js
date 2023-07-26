// eslint-disable-next-line max-len
const {addNoteHandler, getAllNotesHandler, getNoteByID} = require('./handle.js');

const route = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByID,
  },
];

module.exports = route;


