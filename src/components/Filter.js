import { Button } from "react-bootstrap";
import Modals from "./Modals";
const Filter = ({
  breweries,
  details,
  setShow,
  show,
  handleClose,
  searchData,
  setDetails,
}) => {
  const handleSetDetails = (brewery) => {
    setDetails(brewery);
    setShow(true);
  };
  const filter = breweries
    .filter((brewery) => {
      if (searchData === "") {
        return brewery;
      } else if (
        brewery.name.toLowerCase().includes(searchData.toLowerCase()) ||
        brewery.city.toLowerCase().includes(searchData.toLowerCase()) ||
        brewery.brewery_type.toLowerCase().includes(searchData.toLowerCase()) ||
        brewery.state.toLowerCase().includes(searchData.toLowerCase()) ||
        brewery.country.toLowerCase().includes(searchData.toLowerCase())
      ) {
        return brewery;
      }
    })
    .map((brewery, index) => {
      return (
        <div key={index} className="col-md-4 mx-0 mb-4">
          <div className="card p-0  h-100">
            <div key={index} className="card-body">
              <h5 className="card-title">{brewery.name}</h5>
              <p className="card-text">
                {brewery.brewery_type}
                <br />
                {brewery.city}
              </p>

              <Button
                variant="primary"
                onClick={() => handleSetDetails(brewery)}
              >
                Show details
              </Button>
              <Modals
                details={details}
                setShow={setShow}
                show={show}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      );
    });
  return filter;
};

export default Filter;
