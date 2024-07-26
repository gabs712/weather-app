const VisualCrossing = (location, unit) => {
  const fetchLocation = async () => {
    // 'metric' is celsius, 'us' is fahrenheit and 'base' is kelvin
    if (unit === 'fahrenheit') unit = 'us'
    else if (unit === 'celsius') unit = 'metric'

    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=25GZYCXST5KXJ5NU527RPYTV2&unitGroup=${unit}`,
    )

    if (response.status === 400) {
      throw new Error('Invalid location')
    } else if (!response.ok) {
      throw new Error('Something went wrong')
    }

    return response.json()
  }

  const processData = async () => {
    const data = await fetchLocation()
    const processed = {}

    processed.address = data.resolvedAddress
    processed.description = data.description
    processed.condition = data.currentConditions.conditions
    processed.temp = data.currentConditions.temp
    processed.icon = data.currentConditions.icon

    return processed
  }

  return { processData }
}

const Weather = (location, unit) => {
  const getData = async () => {
    const APIData = VisualCrossing(location, unit).processData()
    return APIData
  }

  return { getData }
}

export default Weather
