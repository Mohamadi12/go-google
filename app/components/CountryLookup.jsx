"use client"

import { useEffect, useState } from "react"

const CountryLookup = () => {
    const [country, setCountry] = useState('Tunis')

    useEffect(() =>{
        const getCountry = async() =>{
            const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
            const data = await res.json()
            const response = data.country
            if(!response) return
            setCountry(response)
        }
        getCountry()
    },[])
  return (
    <div>
        {country}
    </div>
  )
}

export default CountryLookup