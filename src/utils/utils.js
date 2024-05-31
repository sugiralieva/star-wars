import axios from "axios"

async function fetchItem (endpoint, id, stateFn) {
    try{
    const response = await axios.get(`https://swapi.dev/api/${endpoint}/${id}`)
    stateFn(response.data)
    } catch {
        stateFn({information:'No information'})
    }
}

async function fetchDetailsOfItem (details) {
    const returnedInfo = []
    try{
        for (let i = 0; i < details.length; i++) {
            const response = await axios.get(details[i])
            (response.data.name) ? returnedInfo.push(response.data.name) : returnedInfo.push(response.data.title)
        }
    
    } catch {
        returnedInfo.push('No info')
    }

    return returnedInfo.join(', ')
}

export {fetchItem, fetchDetailsOfItem} ;