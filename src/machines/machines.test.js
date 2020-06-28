import 'babel-polyfill'
import { interpret } from 'xstate'
import { userFetchMachine } from './Usermachine'
import { accountFetchMachine } from './accountsmachine'
import { subaccountFetchMachine } from './subaccountmachine'

test('should call fetching users method', done => {
  global.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    )

  const userService = interpret(userFetchMachine)
    .onTransition(state => {
      if (state.matches('fetching')) {
        expect(global.fetch).toHaveBeenCalledTimes(1)
        done()
      }
    })
    .start()

  userService.send('FETCH_USERS')
})

test('should call fetching accounts method', done => {
  global.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    )

  const accountService = interpret(accountFetchMachine)
    .onTransition(state => {
      if (state.matches('fetching')) {
        expect(global.fetch).toHaveBeenCalledTimes(1)
        done()
      }
    })
    .start()

  accountService.send('FETCH_ACCOUNTS')
})

test('should call fetching subaccounts (transactions) method', done => {
  global.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve({ json: () => Promise.resolve({}) })
    )

  const subaccountService = interpret(subaccountFetchMachine)
    .onTransition(state => {
      if (state.matches('fetching')) {
        expect(global.fetch).toHaveBeenCalledTimes(1)
        done()
      }
    })
    .start()

  subaccountService.send('FETCH_SUBACCOUNTS')
})
