import { useEffect, useState } from "react"

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const [apiQuery, setApiQuery] = useState("")

    const handleQuery = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSumbit = (event) => {
        event.preventDefault()
        setApiQuery(searchQuery)
    }

    useEffect(() => {
        //api call here ? 
    }, [apiQuery])
    
    return (
        <form onSubmit={handleSumbit} className="flex justify-center py-20">
            <input type="text" name="searchQuery" value={searchQuery} onChange={handleQuery} placeholder="Search for a product..." className="border border-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 "/>
            <button className="bg-green-500 px-4 py-2 ">Search</button>
            {apiQuery && <p>{apiQuery}</p>}
        </form>
    )
}