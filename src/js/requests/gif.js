const GiphyAPI = (search) => {
  const fetchGif = async () => {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=tb2p9L7ZWNWzOGaqoJE2ktAST2U8mQG2&s=${search}`,
    )

    if (!response.ok) {
      throw new Error(`Failed to retrieve data: ${response.status}`)
    }
    response = response.json()

    // response.data comes as an array if there's no matching results
    if (Array.isArray(response.data)) {
      throw new Error('gif not found')
    }

    return response
  }

  const getUrl = async () => {
    const data = await fetchGif()
    return data.data.images.original.url
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
