import { Modal, Button } from "react-bootstrap";

const Modals = ({ details, setShow, show, handleClose }) => {
  if (details !== undefined) {
    const {
      name,
      street,
      brewery_type,
      address_2,
      address_3,
      city,
      country_province,
      postal_code,
      state,
      phone,
    } = details;
    return (
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <center>
              <p>
                {brewery_type !== null ? `Brewery type: ${brewery_type}` : ""}
              </p>
              <p> {city !== null ? `City: ${city}` : ""} </p>
              <p> {state !== null ? `State: ${state}` : ""} </p>
              <p> {street !== null ? `Street: ${street}` : ""} </p>
              <p> {address_2 !== null ? `Second Address: ${address_2}` : ""}</p>
              <p> {address_3 !== null ? `Third Address: ${address_3}` : ""} </p>

              <p>
                {country_province !== null && country_province !== undefined
                  ? `Country Province: ${country_province}`
                  : ""}
              </p>
              <p>{postal_code !== null ? `Postal Code: ${postal_code}` : ""}</p>
              <p>
                {phone !== null && phone !== undefined ? `Phone: ${phone}` : ""}
              </p>
            </center>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};

export default Modals;
