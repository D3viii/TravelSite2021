import React from "react";

function Booking(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label>Flights</label>
      </div>
      <div className="col-sm">
        <input type="text" placeholder="From" aria-label="From"></input>
        <input type="text" placeholder="To" aria-label="To"></input>
      </div>
    </form>
  );
}

{
  /* <div class="col-sm">
    <input type="text" class="form-control" placeholder="State" aria-label="State">
  </div> */
}
