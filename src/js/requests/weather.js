const visualCrossing = (() => {
  const fetchLocation = async (location, unit) => {
    // 'metric' is celsius, 'us' is fahrenheit and 'base' is kelvin
    if (unit === 'fahrenheit') unit = 'us'
    else if (unit === 'celsius') unit = 'metric'

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=25GZYCXST5KXJ5NU527RPYTV2&unitGroup=${unit}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to retrieve data: ${response.status}`)
    }
    return response.json()
  }

  const processData = async (location, unit) => {
    const data = await fetchLocation(location, unit)
    const processed = {}

    processed.adress = data.resolvedAddress
    processed.description = data.description
    processed.condition = data.currentConditions.conditions
    processed.temp = data.currentConditions.temp
    processed.icon = data.currentConditions.icon

    return processed
  }

  return { processData }
})()

const weatherData = (() => {
  const get = async (location, unit = 'celsius') => {
    const APIData = await visualCrossing.processData(location, unit)
    return APIData
  }

  return { get }
})()

export default weatherData
