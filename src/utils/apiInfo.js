const apiKey = 'zg6lhahTKm3MXxLYgI4BHQfhAaif-0CyP9wrUG9eWor3D9Kk5jGAtgAgI2cHo2IVCEfSgxPN3Pv-sZdM0q596OYVHvs40h6ygfwSi1qzMXgfYmrHYsQDFyJRhNSZZHYx'
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3'

const getBusinessList = async (location=undefined, filter=undefined, term=undefined,limit=6) => {
    const endpoint = '/businesses/search'
    const searchParameters = `?${location?`location=${location}&`:''}${term?`term=${term}&`:''}${filter?`sort_by=${filter}&`:''}${limit?`limit=${limit}&`:''}`
    const urlToFetch = baseUrl + endpoint + searchParameters
    console.log(urlToFetch)

    try {
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
                accept: 'application/json'
            }
        })

        if(response.ok) {
            const jsonResponse = await response.json()
            // console.log(jsonResponse)
            return jsonResponse
        }
    } catch(error) {
        console.log(error)
    }

}

// getBusinessList("LA",undefined, undefined, 2)

export default getBusinessList;
