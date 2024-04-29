import Navbar from "./home/Navbar"
import Search from "./home/Search"
import {useParams} from 'react-router-dom';

export default function Result() {
    const {q} = useParams()
    
    return (
        <>
            <Navbar />
            <Search />
            <h1 className="text-green-500">{q}</h1>
        </>
    )
}
