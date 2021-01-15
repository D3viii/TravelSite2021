import React from "react";

function HotelSearch(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label>Hotels</label>
      </div>
      <div className="col-sm">
        <input
          type="text"
          placeholder="Destination"
          aria-label="Destination"
          value={props.search}
          onChange={props.handleInputChange}
          id="Destination"
        ></input>
        <input
          type="text"
          placeholder="Check-In Date"
          value={props.search}
          onChange={props.handleInputChange}
          id="Check-InDate"
        ></input>
        <input
          type="text"
          placeholder="Check-Out Date"
          value={props.search}
          onChange={props.handleInputChange}
          id="Check-OutDate" 
        ></input>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
          id="HsearchButton"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default HotelSearch;
