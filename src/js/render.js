const weatherInfoDiv = document.querySelector('[data-weather-info-div]')
const SYMBOLS = {
  fahrenheit: 'ºF',
  celsius: 'ºC',
}

const WeatherTemplate = (weatherInfo, gifUrl, unit) => {
  const unitSymbol = SYMBOLS[unit]

  const getTemplate = async () => {
    const template = `
      <div class="mt-3 text-white">
        <div class="flex min-h-[1lh] justify-between gap-5">
          <h2
            data-address
            class="bg col-span-12 text-base font-bold leading-tight"
          >
            ${weatherInfo.address}
          </h2>
          <button
            class="grid size-6 shrink-0 place-content-center rounded-full bg-cyan-500 text-xs font-bold tracking-wider shadow hover:bg-slate-100 hover:text-cyan-500"
          >
            ${unitSymbol === SYMBOLS.fahrenheit ? SYMBOLS.celsius : SYMBOLS.fahrenheit}
          </button>
        </div>
        <div class="mt-4 flex justify-center gap-5">
          <div data-temp class="min-h-[1lh] text-7xl tracking-tighter">
            ${weatherInfo.temp}<span data-unit class="align-top text-xl tracking-wider">${unitSymbol}</span>
          </div>
          <div>
            <img
              class="size-12"
              data-icon
              src="${(await import(`../assets/weather-icons/${weatherInfo.icon}.png`)).default}"
              alt=""
            />
          </div>
        </div>
        <div class="mt-5 flex justify-center">
          <img
            class="size-32 rounded-3xl bg-slate-100/90 object-cover object-center"
            src="${gifUrl}"
            alt=""
          />
        </div>
        <div class="mt-3">
          <h3 data-condition class="min-h-[1lh] font-bold leading-tight">
            ${weatherInfo.condition}
          </h3>
          <p data-description class="mt-1.5 min-h-[1lh] text-base leading-snug">
            ${weatherInfo.description}
          </p>
        </div>
      </div>
    `
    return template
  }

  const clear = () => {
    weatherInfoDiv.innerHTML = ''
  }

  const render = async () => {
    clear()
    weatherInfoDiv.innerHTML = await getTemplate()
  }

  return { render }
}

export default WeatherTemplate
