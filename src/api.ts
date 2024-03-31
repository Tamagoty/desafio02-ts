const conta = {
  email: 'ette@tamagoty.me',
  passeword: '123456',
  name: 'Ettê Mendes'
}

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta)
  }, 1500)

})