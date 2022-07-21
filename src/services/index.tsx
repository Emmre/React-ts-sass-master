import axios from "axios"

export const fetchData = async () => {
  const data = axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return data
}
