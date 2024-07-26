const GiphyAPI = (search) => {
  const fetchData = async () => {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=tb2p9L7ZWNWzOGaqoJE2ktAST2U8mQG2&s=${search}`,
    )

    if (!response.ok) {
      throw new Error('Something went wrong while loading the Gif')
    }
    response = await response.json()

    // response.data comes as an array if there's no matching results
    if (Array.isArray(response.data)) {
      throw new Error('Gif not found')
    }

    return response
  }

  const getUrl = async () => {
    let url
    try {
      url = (await fetchData()).data.images.original.url
    } catch (e) {
      console.log(e.message)
      url = undefined
    }
    return url
  }

  return { getUrl }
}

const Gif = (search) => {
  const getUrl = () => {
    const url = GiphyAPI(search).getUrl()
    return url
  }

  return { getUrl }
}

export default Gif
