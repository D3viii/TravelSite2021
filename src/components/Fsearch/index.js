import React from "react";

function FlightSearch(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label>Flights</label>
      </div>
      <div className="col-sm">
        <input
          type="text"
          placeholder="From"
          aria-label="From"
          value={props.search}
          onChange={props.handleInputChange}
          id="From"
        ></input>
        <input
          type="text"
          placeholder="To"
          aria-label="To"
          value={props.search}
          onChange={props.handleInputChange}
          id="To"
        ></input>
        <input
          type="text"
          placeholder="Departure Date"
          value={props.search}
          onChange={props.handleInputChange}
          id="DepartureDate"
        ></input>
        <input
          type="text"
          placeholder="Arrival Date"
          value={props.search}
          onChange={props.handleInputChange}
          id="Arrival Date"
        ></input>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
          id="FsearchButton"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default FlightSearch;

// {
//   /* <div class="col-sm">
//     <input type="text" class="form-control" placeholder="State" aria-label="State">
//   </div> */
// }
