class InvalidNumberPageException extends Error {
  constructor (message, status = 500) {
    super(message)
    this.name = 'InvalidNumberPageException'
    this.status = status
  }
}
export { InvalidNumberPageException }
