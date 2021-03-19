import { validateUserName, validateUserEmail, validateUserPassword } from '../js/registrationForm'

describe('Validate Form', () => {
  test('Testing validateUserName() function', () => {
    expect(validateUserName('Eleonora')).toEqual(null)
    expect(validateUserName('')).toEqual('You should enter Username')
  })

  test('Testing validateUserEmail() function', () => {
    expect(validateUserEmail('email@gmail.com')).toEqual(null)
    expect(validateUserEmail('email11gmailcom')).toEqual('You should enter valid email')
  })

  test('Testing validateUserPassword() function', () => {
    expect(validateUserPassword('234ui97')).toEqual(null)
    expect(validateUserPassword('123')).toEqual('Your password should have 6 or more symbols')
  })
})

