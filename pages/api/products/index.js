export default (req, res) => {
  res.statusCode = 200
  const response = {
    error: false,
    errorText: '',
    count: 720,
    data: [
      {
        title: 'FLORAL PRINT MINI DRESS',
        descripcion:
          'Vestido floral mini dress, adjustable a la silueta. Tela de algodón y polyester.',
        brand: 'CLOTHING',
        rubro: 'WOMEN',
        linea: 'DRESS',
        coleccion: 'T1-2021',
        productCode: 2000439720,
        SKU: 2000439720022,
        existence: true,
        stock: 20,
        precio: 189000,
        precioOferta: 151200,
        porcentajeDescuento: 20,
      },
    ],
  }
  res.json(response)
}
