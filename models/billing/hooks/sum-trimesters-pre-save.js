function sumTrimesters(next) {
  const sum = this.trimesters.reduce((accumulator, currentValue) => accumulator + currentValue);
  this.annual = sum;
  next();
}

module.exports = sumTrimesters;
