class InvalidUserIdException extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidUserIdException'
  }
}
export { InvalidUserIdException }
