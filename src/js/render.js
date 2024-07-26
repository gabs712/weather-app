import { Search, unit } from './interactivity.js'

const renderWeather = (() => {
  const weatherInfoDiv = document.querySelector('[data-weather-info-div]')

  const clear = () => {
    weatherInfoDiv.innerHTML = ''
  }

  const refresh = (template) => {
    clear()
    weatherInfoDiv.innerHTML = template
    listener.unitToggler()
  }

  return { refresh }
})()

const listener = (() => {
  const form = document.querySelector('[data-form]')
  const input = document.querySelector('[data-input-div]')
  const search = Search(input)

  const unitToggler = () => {
    const changeUnitDiv = document.querySelector('[data-change-unit-div]')

    changeUnitDiv.addEventListener('click', async () => {
      unit.toggle()
      search.refresh()
    })
  }

  const submiter = () => {
    form.addEventListener('submit', (e) => {
      search.submit(e)
    })
  }

  return { unitToggler, submiter }
})()

const renderMessage = (() => {
  const messageDiv = document.querySelector('[data-message-div]')

  const clear = () => {
    messageDiv.textContent = ''
  }

  const custom = (message) => {
    clear()
    messageDiv.textContent = message
  }

  const loading = () => {
    clear()
    messageDiv.textContent = 'Loading...'
  }

  return { custom, clear, loading }
})()

export { renderWeather, renderMessage, listener }
