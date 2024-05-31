import axios from "axios"

async function fetchItem (endpoint, id, stateFn) {
    try{
    const response = await axios.get(`https://swapi.dev/api/${endpoint}/${id}`)
    stateFn(response.data)
    } catch {
        stateFn({information:'No information'})
    }
}

export default fetchItem;