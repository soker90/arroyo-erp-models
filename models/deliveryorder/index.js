const { Schema, model } = require("mongoose");

const deliveryOrderSchema = new Schema({
  date: Number, // Fecha del albarán
  provider: String, // Id del proveedor
  nameProvider: String, // Nombre del proveedor
  products: [], // Listado de productos del albarán
  size: Number, // Número de productos (¿Quitar?)
  total: Number, // Importe total
  iva: Number, // Iva total
  rate: Number, // Tasa total (si tiene)
  re: Number, // Recargo total
  invoice: String, // Id de la factura
  taxBase: Number, // Base imponible total
});

module.exports = model("DeliveryOrder", deliveryOrderSchema);
