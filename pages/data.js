import axios from 'axios'
const fetchData = async () => {
  const data = await axios.get(
    `https://yts.mx/api/v2/list_movies.json?page=501&limit=50&api_key=7779a67355fa280acccffd8e56db02d1`,
  )
  return data.data
}

export default fetchData
