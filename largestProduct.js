class LargestProduct {
  constructor(number) {
    let array = number.split("");
    let index = 0;
    let product = 0;
    for (let i = 0; i < array.length - 4; i++) {
      let challenger =
        array[i] * array[i + 1] * array[i + 2] * array[i + 3] * array[i + 4];
      if (challenger > product) {
        product = challenger;
        index = i;
      }
    }
    this.index = index;
    this.product = product;
  }

  getLargestProductIndex() {
    return this.index;
  }

  getLargestProduct() {
    return this.product;
  }
}

module.exports = LargestProduct;
