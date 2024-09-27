class InvalidPriceException extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidPriceException'
  }
}
export { InvalidPriceException }
