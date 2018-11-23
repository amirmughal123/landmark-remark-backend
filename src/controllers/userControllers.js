import User from '../models/users';

const create = async(req, res, next) => {
  try {
    const { email, userName } = req.body;
    const user = await User.findOne({ email, userName });
    if(!user) {
      const data = await User.create(req.body);

      if(!data) return res.send({ status: false, msg: 'User not created, something went wrong' });
      else return res.send({ status: true, msg: 'User created successfully!!!', data });

    } else {
      return res.send({ status: true, msg: 'User loggedin successfully!!!', data: user });
    }

  } catch(err) {
    return res.send({ status: false, msg: err.message });
  }
}

const getAll = async(req, res, next) => {
  try {
    const data = await User.find({});

    if(!data) return res.send({ status: false, msg: 'notes not available', data });
    else return res.send({ status: true, msg: 'Notes fetched!!!', data });
    
  } catch(err) {
    return res.send({ status: false, msg: err.message });
  }
}

  export default { create, getAll };
