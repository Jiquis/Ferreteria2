const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const materialsRoutes = require('./routes/materialsRoutes');

const app = express();
app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', materialsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});