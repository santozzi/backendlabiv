class InvalidQueryParamException extends Error {
  constructor (message) {
    super(message)
    this.name = 'InvalidQueryParamException'
  }
}
export { InvalidQueryParamException }
