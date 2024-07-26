import Weather from './requests/weather.js'
import Gif from './requests/gif.js'
import state from './state.js'
import WeatherTemplate from './weatherTemplate.js'
import { renderWeather, renderMessage } from './render.js'

const Search = (input) => {
  const refresh = async () => {
    try {
      renderMessage.loading()

      const weatherInfo = await Weather(state.search, state.unit).getData()
      const gifUrl = await Gif(weatherInfo.condition).getUrl()
      const template = await WeatherTemplate(
        weatherInfo,
        gifUrl,
        state.unit,
      ).get()

      renderWeather.refresh(template)
      renderMessage.clear()
      clearInput()
    } catch (e) {
      renderMessage.custom(e.message)
    }
  }

  const clearInput = () => {
    input.value = ''
  }

  const submit = async (e) => {
    state.search = input.value

    e.preventDefault()
    await refresh()
  }

  return { submit, refresh }
}

const unit = (() => {
  const toggle = () => {
    if (state.unit === 'celsius') {
      state.unit = 'fahrenheit'
    } else {
      state.unit = 'celsius'
    }
  }

  return { toggle }
})()

export { Search, unit }
