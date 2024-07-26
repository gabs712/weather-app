import { Search } from './interactivity.js'

const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input-div]')


form.addEventListener('submit', (e) => {
  Search(input).submit(e)
})
