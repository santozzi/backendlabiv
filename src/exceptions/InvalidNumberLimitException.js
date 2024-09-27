class InvalidNumberLimitException extends Error {
  constructor (message, status = 500) {
    super(message)
    this.name = 'InvalidNumberLimitException'
    this.status = status
  }
}
export { InvalidNumberLimitException }
