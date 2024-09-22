class InvalidNumberPageException extends Error {
  constructor(message) {
    super(message)
    this.name = 'InvalidNumberPageException'
  }
}
export { InvalidNumberPageException }