class InvalidNumberLimitException extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidNumberLimitException'
  }
}
export { InvalidNumberLimitException }