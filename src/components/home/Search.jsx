import {  useState } from "react"
import { useNavigate,  } from "react-router-dom"

export default function Search() {
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate();

    const handleQuery = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formattedQuery = searchQuery.trim().replace(/\s+/g, '+');
        navigate(`/search/${formattedQuery}`)
    }

        
    return (
        <form onSubmit={handleSubmit} className="flex justify-center py-20">
            <input type="text" required value={searchQuery}  onChange={handleQuery} placeholder="Search for a product..." className="border border-green-500 focus:outline-none focus:ring-green-500 focus:border-green-500 "/>
            <button type="submit" className="bg-green-500 px-4 py-2 ">Search</button>
        </form>
    )
}