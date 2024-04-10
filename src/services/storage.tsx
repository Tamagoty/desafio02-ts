interface ITamagotyBank {
  login: boolean
}

const tamagotybank = {
  login: false
}

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem('tamagotybank')
}

export const createLocalStorage = (): void => {
  localStorage.setItem('tamagotybank', JSON.stringify(tamagotybank))
}

export const changeLocalStorage = (tamagotybank: ITamagotyBank): void => {
  localStorage.setItem('tamagotybank', JSON.stringify(tamagotybank))
}