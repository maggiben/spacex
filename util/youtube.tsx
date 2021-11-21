const getYouTubeId = (youTubeUrl: string): string | undefined => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
  var match = youTubeUrl.match(regExp)
  if (match && match[2].length == 11) {
    return match[2]
  }
  return undefined
}

export const getEmbedUrl = (youTubeUrl: string | null | undefined): string | undefined => {
  if (youTubeUrl) {
    const videoId = getYouTubeId(youTubeUrl);
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
  }
  return undefined;
}