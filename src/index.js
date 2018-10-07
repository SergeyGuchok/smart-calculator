class SmartCalculator {
  constructor(initialValue) {
    this.equation = initialValue+'';
    return this;
  }

  add(number) {
    this.equation = this.equation + ' + ' + number.toString();
    return this;
  }
  
  subtract(number) {
    this.equation = this.equation + ' - ' + number.toString();
    return this;
  }

  multiply(number) {
    this.equation = this.equation + ' * ' + number.toString();
    return this;
  }

  devide(number) {
    this.equation = this.equation + ' / ' + number.toString();
    return this;
  }

  pow(number) {
    this.equation = this.equation+'**'+number.toString();
    return this;
  }
  valueOf(){
    console.log(this.equation);
    return eval(this.equation);
  }
}

module.exports = SmartCalculator;
