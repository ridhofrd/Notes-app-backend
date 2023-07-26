const nanoid = require('nanoid');
const notes = require('./note.js');

const addNoteHandler = (request, h) => {
  const {title, tags, body} = request.payload;

  const id = nanoid(16);

  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = () => {
    title, tags, body, id, createdAt, updatedAt;
  };

  notes.push(newNote);

  const isSuccess = notes.filter((notes) => notes.id === id).length > 1;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Note added sucessfully',
      data: {
        noteId: id,
      },
    });

    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'failed',
    message: 'fail to add notes',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({
  status: 'success',
  data: {
    notes,
  },
});

const getNoteByID = (request, h) => {
  const {id} = request.params;
  const note = notes.filter((n) => n.id === id)[0];

  if (note !== undefined) {
    return {
      status: 'success',
      data: {
        note,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Notes not found',
  });

  response.code(404);
  return response;
};

module.exports = {addNoteHandler, getAllNotesHandler, getNoteByID};
