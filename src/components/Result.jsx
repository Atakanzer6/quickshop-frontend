import Navbar from "./home/Navbar"
import Search from "./home/Search"
import Card from "./Card";
import {useParams} from 'react-router-dom';

export default function Result() {
    const {q} = useParams()
    return (
        <>
            <Navbar />
            <Search />
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mx-5 ">
                {/* grid test */}
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
                <Card name={q} img="https://www.kindacode.com/wp-content/uploads/2022/07/kindacode-example.png" link="https://www.kindacode.com" price="69"/>
            </div>
        </>
    )
}
