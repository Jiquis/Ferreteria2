// controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Usuario simulado (clave: 123456)
const user = {
  id: 1,
  username: 'admin',
  password: bcrypt.hashSync('123456', 10)
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Campos obligatorios' });

  if (username !== user.username || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Credenciales incorrectas' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, 'secreto123', {
    expiresIn: '1h'
  });

  res.json({ token });
};
