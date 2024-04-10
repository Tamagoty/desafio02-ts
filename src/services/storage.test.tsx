import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const tamagotybank = {
  login: false
}

const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

describe('storage', () => {

  
  it('Deve retornar o objeto no localStorage com a chave tamagotybank', () => {
    const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
    getAllLocalStorage()
    expect(mockGetItem).toHaveBeenCalledWith('tamagotybank')
  })

  it('Deve criar o objeto no localStorage', () => {
    
    createLocalStorage()
    expect(mockSetItem).toHaveBeenCalledWith('tamagotybank', JSON.stringify(tamagotybank))
  })

  it('Deve alterar o valor do objeto no localStorage', () => {
    changeLocalStorage(tamagotybank)
    expect(mockSetItem).toHaveBeenCalledWith('tamagotybank', JSON.stringify(tamagotybank))
  })
})