const getUriWithParam = (baseUrl: string, params: Record<string, string>) => {
  const Url = new URL(baseUrl)
  const urlParams = new URLSearchParams(Url.search);
  for (const key in params) {
    if (params[key] !== undefined) {
      urlParams.set(key, params[key])
    }
  }
  Url.search = urlParams.toString()
  return Url.toString()
}

export default getUriWithParam