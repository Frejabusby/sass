import React from "react"
import "./form.css"

class Form extends React.Component {
  render() {
    return (
      <div className="form-container">
        <form className="flight-form">
          <label className="input-flight-from">
            <p>Flyg från</p>
            <input type="text" placeholder="Var flyger du ifrån?" />
            <img src="./images/flight-from.png" alt="lifting flight" />
          </label>
          <label className="input-flight-to">
            <p>Flyg till</p>
            <input type="text" placeholder="Vart vill du resa?" />
            <img src="./images/flight-to.png" alt="landigt flight" />
          </label>
          <p className="flight-citys"><a href="">Stockholm,</a> <a href="">Göteborg</a> eller <a href="">Malmö</a>?</p>
          <div className="search-button-container">
            <button className="search-button">Sök och beställ</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form
