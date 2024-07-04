import SearchPageNavbar from "./SearchPageNavbar";
import Card from "./Card";
import SideBar from "./SideBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Result() {
  const { q } = useParams();
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/products/${q}`);
        if (!response.ok) {
          throw new Error("Network response failed!");
        }
        const data = await response.json();
        setApiResults(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q]);

  console.log(apiResults);

  return (
    <div>
      <SearchPageNavbar />
      <div className="flex">
        <SideBar />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mx-5 p-4 h-[calc(100vh-4rem)] overflow-y-scroll">
            {apiResults[0].newegg.map((data) => (
              <Card
                key={uuidv4()}
                name={data.name}
                link={data.link}
                img={data.image}
                price={data.price}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
