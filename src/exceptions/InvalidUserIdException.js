class InvalidUserIdException extends Error {
  constructor (message, status = 500) {
    super(message)
    this.name = 'InvalidUserIdException'
    this.status = status
  }
}
export { InvalidUserIdException }
