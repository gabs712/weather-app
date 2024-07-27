const translateCondition = (condition) => {
  switch (condition) {
    case 'Partly Cloudy':
      return 'cloudy weather'
    case 'Mostly Cloudy':
      return 'cloudy weather'
    case 'Light Rain':
      return 'rain weather'
    case 'Heavy Rain':
      return 'rain weather'
    case 'Light Snow':
      return 'snow weather'
    case 'Heavy Snow':
      return 'snow weather'
    case 'Freezing Rain':
      return 'rain weather'
    case 'Clear':
      return 'clear weather'
    default:
      return condition + ' weather'
  }
}

export { translateCondition }
