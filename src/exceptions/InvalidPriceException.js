class InvalidPriceException extends Error {
  constructor (message, status = 500) {
    super(message)
    this.name = 'InvalidPriceException'
    this.status = status
  }
}
export { InvalidPriceException }
