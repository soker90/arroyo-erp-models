const { Schema, model } = require('mongoose');

const deliveryOrderSchema = new Schema({
  date: Number, // Fecha del albarán
  provider: String, // Id del proveedor
  client: String, // Id del cliente
  name: String, // Nombre del cliente o proveedor
  products: [], // Listado de productos del albarán
  size: Number, // Número de productos (¿Quitar?)
  total: Number, // Importe total
  iva: Number, // Iva total
  rate: Number, // Tasa total (si tiene)
  re: Number, // Recargo total
  invoice: String, // Id de la factura
  taxBase: Number, // Base imponible total
  nOrder: Number, // Numero de orden de la factura
  note: String, // Notas del albarán
  hasCanal: Boolean, // Tiene canal el albarán
}, { versionKey: false });

module.exports = model('DeliveryOrder', deliveryOrderSchema);
