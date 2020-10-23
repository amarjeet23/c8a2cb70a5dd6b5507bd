import React from 'react'

export default function Data({data}) {
    return (
        <div>
            <p>Name : - {JSON.stringify(data.name)}</p>
            <p>nasa_jpl_url - {JSON.stringify(data.nasa_jpl_url)}</p>
            <p>is_potentially_hazardous_asteroid : - {JSON.stringify(data.is_potentially_hazardous_asteroid)}</p>

        </div>
    )
}
