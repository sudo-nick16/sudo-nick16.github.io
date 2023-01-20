export default async function fetchGraphql(query: string) {
    try {
        const response = await fetch("/api/graphql", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ query: query })
        })
        const { data } = await response.json()
        return data || {}
    }catch(e){
        console.log("Error while fetching: ", e)
        return {}
    }
}
