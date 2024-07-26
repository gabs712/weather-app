const renderWeather = (() => {
  const weatherInfoDiv = document.querySelector('[data-weather-info-div]')

  const clear = () => {
    weatherInfoDiv.innerHTML = ''
  }

  const refresh = (template) => {
    clear()
    weatherInfoDiv.innerHTML = template
  }

  return { refresh }
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

export { renderWeather, renderMessage }
