class UserAuthException extends Error {
  constructor (message) {
    super(message)
    this.name = 'UserAuthException'
  }
}
export { UserAuthException }
