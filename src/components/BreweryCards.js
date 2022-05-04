import { useState } from "react";
import Filter from "./Filter";

const BreweryCards = ({ breweries, searchData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [details, setDetails] = useState();

  return (
    <center>
      <section className="py-4 container">
        <div className="row justify-content-center">
          <Filter
            breweries={breweries}
            searchData={searchData}
            details={details}
            setShow={setShow}
            show={show}
            handleClose={handleClose}
            setDetails={setDetails}
          />
        </div>
      </section>
    </center>
  );
};

export default BreweryCards;
