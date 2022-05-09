const data = {
  error: false,
  data: {
    title: 'Vestido Floral',
    brand: 'Nice',
    product_code: 'CGTOKVSC350CER',
    sku: 49505,
    coleccion: 'T1-2021',
    precio: 4379234,
    precio_descuento: '',
    porcentajeDescuento: '',
    currency: 'GS',
    existence: true,
    descripcion: '',
    descripcionLarga: '',
    rubro: 'Mujer',
    familia: 'Vestido',
    linea: '',
    sku: 'T1796',
    ean: 841175007783,
    technicalDetails: [
      {
        atributo: 'ANCHO',
        valor: ' 64.5 CM ',
      },
      {
        atributo: 'ALTO',
        valor: ' 191.6 CM ',
      },
      {
        valor: ' 67.5 CM ',
      },
      {
        atributo: 'PESO',
        valor: ' 76500 GR',
      },
    ],
    images: [
      {
        id: '1',
        url: 'CGTOKVSC350CER.jpg',
      },
    ],
  },
}

export default (req, res) => {
  res.statusCode = 200
  res.json(data)
}
