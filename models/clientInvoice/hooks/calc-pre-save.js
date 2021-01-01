function calcPreSave(next) {
  if (this.total) {
    this.taxBase = this.total / 1.1;
    this.iva = this.taxBase * 0.1;
  }
  next();
}

module.exports = calcPreSave;
