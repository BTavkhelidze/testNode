const User = require('../model/User.js');
const generateToken = require('../utils/genToken.js');

const registerUser = async (req, res) => {
  const { email, name, password } = req.body;
  const existUser = await User.findOne({ email: email });
  if (existUser) throw new Error('user already exist');

  const user = await User.create({
    email,
    name,
    password,
  });
  res.status(201).json({ message: 'user created successfully' });
};

const loginUSer = async (req, res) => {
  const { email, password } = req.body;
  const existUser = await User.findOne({ email });

  if (!existUser) throw new Error('user does not exist');
  if (existUser && (await existUser.matchPassword(password))) {
    const token = await generateToken(existUser._id);
    res.json({ message: 'login successfully', token });
  } else {
    res.status(401).json({ message: 'login error' });
  }
};

module.exports = { registerUser, loginUSer };
