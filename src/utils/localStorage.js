import { store } from '../store/index.js'

export function getLocalStorage(field) {
  const localField = localStorage.getItem(field)
  if (localField) {
    const jsonToParse = JSON.parse(localField)
    store.dispatch('getLocalField', { jsonToParse, field })
  }
}

export function setLocalStorage(field, updatedList) {
  localStorage.setItem(field, JSON.stringify(updatedList))
}
