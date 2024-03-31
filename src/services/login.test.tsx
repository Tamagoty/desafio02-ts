import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    
    const mockEmail = 'ette@tamagoty.me'
    it('Deve exibir um alert com boas vindas caso o e-mail seja valido', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo, ${mockEmail}!`)
    })
    it('Não deve exibir a mensagem de boas vindas sem o email', async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem vinda!')
    })

    it('Deve exibir um erro caso o e-mail seja invalido', async() => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('E-mail inválido')
    }
    )
})