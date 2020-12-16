import React, { Component } from "react";
import QuotesIndex from "./quotes_index";

class Quotes extends Component {
  render() {
    return (
      <div className='container'>
        <div>
          <ul className='quote-filter-menu'>
            <li className='quote-filter-item selected'>
              Made data meaningful for individuals
            </li>
            <li className='quote-filter-item'>Opportunity to advance</li>
            <li className='quote-filter-item'>Co-design</li>
          </ul>
          <QuotesIndex />
        </div>
      </div>
    );
  }
}

export default Quotes;
