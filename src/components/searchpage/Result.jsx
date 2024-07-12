import SearchPageNavbar from "./SearchPageNavbar";
import Card from "./Card";
import SideBar from "./SideBar";
import LoadingUI from "./LoadingUI";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Result() {
  const { q } = useParams();
  const [apiResults, setApiResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cardData, setCardData] = useState(null);
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const initialDataComplete = useRef(false);

  const [buttons, setButtons] = useState([
    { id: 1, label: "Newegg", isActive: true },
    { id: 2, label: "BestBuy", isActive: false },
    { id: 3, label: "Ebay", isActive: false },
    { id: 4, label: "Walmart", isActive: false },
    { id: 5, label: "Amazon", isActive: false },
  ]);

  const handleHamburgerMenu = () => {
    setIsHamburgerMenuOpen((prevState) => !prevState);
  };

  const handleClick = (platform, id) => {
    // change the rendered data based on clicked platform
    setCardData(apiResults[0][platform]);

    // set all buttons to false and the clickled button to true
    setButtons((prevButtons) =>
      prevButtons.map((button) =>
        button.id === id
          ? { ...button, isActive: true }
          : { ...button, isActive: false }
      )
    );
  };

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/products/${q}`);
        if (!response.ok) {
          throw new Error("Network response failed!");
        }
        const data = await response.json();
        setApiResults(data);

        setButtons([
          { id: 1, label: "Newegg", isActive: true },
          { id: 2, label: "BestBuy", isActive: false },
          { id: 3, label: "Ebay", isActive: false },
          { id: 4, label: "Walmart", isActive: false },
          { id: 5, label: "Amazon", isActive: false },
        ]);

        if (data.length > 0) {
          setCardData(data[0].newegg);
        } else {
          setCardData(null);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [q]);

  useEffect(() => {
    if (apiResults.length > 0 && !initialDataComplete.current) {
      setCardData(apiResults[0].newegg);
      initialDataComplete.current = true;
    }
  }, [apiResults]);

  console.log(apiResults);

  return (
    <div>
      <SearchPageNavbar handleMenuClick={handleHamburgerMenu} />
      <div className="flex">
        <SideBar
          buttons={buttons}
          handleClick={handleClick}
          isMenuOpen={isHamburgerMenuOpen}
        />
        <div className="flex-grow flex items-start justify-center mt-8 ">
          {loading ? (
            <LoadingUI />
          ) : error ? (
            <p>Error: {error}</p>
          ) : cardData && cardData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-x-6 gap-y-6 mx-5 p-4 h-[calc(100vh-6rem)] overflow-y-scroll">
              {cardData.map((data) => (
                <Card
                  key={uuidv4()}
                  name={data.name}
                  link={data.link}
                  img={data.image}
                  price={data.price ? data.price.replace("$", "") : ""}
                />
              ))}
            </div>
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
