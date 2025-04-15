exports.getMaterials = (req, res) => {
  const materials = [
    { id: 1, nombre: 'Martillo', precio: 120 },
    { id: 2, nombre: 'Destornillador', precio: 80 },
    { id: 3, nombre: 'Taladro', precio: 650 },
    { id: 4, nombre: 'Cinta métrica', precio: 45 }
  ];

  res.json(materials);
};