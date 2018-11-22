import Note from '../models/notes';

const create = async(req, res, next) => {
  try {
    const data = await Note.create(req.body);

    if(!data) return res.send({ status: false, msg: 'note not created, something went wrong' });
    else return res.send({ status: true, msg: 'Note created successfully', data });

  } catch(err) {
    return res.send({ status: false, msg: err.message });
  }
}

const getAll = async(req, res, next) => {
  try {
    const data = await Note.find({});

    if(!data) return res.send({ status: false, msg: 'notes not available', data });
    else return res.send({ status: true, msg: 'Notes fetched!!!', data });

  } catch(err) {
    return res.send({ status: false, msg: err.message });
  }
}
export default { create, getAll };
