import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BreweryCards from "./components/BreweryCards";
import Form from "./components/Form";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    axios.get("https://api.openbrewerydb.org/breweries").then((response) => {
      setBreweries(response.data);
    });

    const script = document.createElement("script");
    script.src = "https://kit.fontawesome.com/0e8aa8de4f.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleFormSearch = (event) => {
    setSearchData(event.target.value);
  };

  return (
    <div>
      <Form searchData={searchData} handleFormSearch={handleFormSearch} />
      <BreweryCards breweries={breweries} searchData={searchData} />
    </div>
  );
}

export default App;
