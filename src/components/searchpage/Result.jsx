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
  const [cardData, setCardData] = useState(null);

  const handleClick = (platform) => {
    setCardData(apiResults[0][platform]);
  };

  const buttons = [
    { id: 1, label: "Newegg", handleClick: () => handleClick("newegg") },
    { id: 2, label: "BestBuy", handleClick: () => handleClick("bestbuy") },
    { id: 3, label: "Ebay", handleClick: () => handleClick("ebay") },
    { id: 4, label: "Walmart", handleClick: () => handleClick("walmart") },
    { id: 5, label: "Amazon", handleClick: () => handleClick("amazon") },
  ];

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

  useEffect(() => {
    if (apiResults.length > 0) {
      setCardData(apiResults[0].newegg);
    }
  }, [apiResults]);

  console.log(apiResults);

  return (
    <div>
      <SearchPageNavbar />
      <div className="flex">
        <SideBar buttons={buttons} />
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 mx-5 p-4 h-[calc(100vh-4rem)] overflow-y-scroll">
            {cardData &&
              cardData.map((data) => (
                <Card
                  key={uuidv4()}
                  name={data.name}
                  link={data.link}
                  img={data.image}
                  price={data.price.replace("$", "")}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
