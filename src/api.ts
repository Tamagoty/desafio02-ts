const conta = {
  email: 'ette@tamagoty.me',
  passeword: '123456',
  name: 'Ettê Mendes',
  balance: 4500.00,
  id: '1'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500)

})