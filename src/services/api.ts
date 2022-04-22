/**
 * 
 */
const request = <T>(path: string): Promise<T> => {
  return fetch(`${process.env.REACT_APP_GITHUB_API_URL}${path}`)
    .then(response => {
      if (response.status === 200)
        return response.json()

      return Promise.reject(new Error('Not found'))
    })
}

export default request
