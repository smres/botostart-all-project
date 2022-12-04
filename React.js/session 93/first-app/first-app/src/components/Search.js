import React, { Component } from 'react'

import styles from "./Search.module.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ""
    }
  }

  changeSearchText = (event)=> {
    this.setState({
      searchText: event.target.value
    })
  }

  render() {
    const {searchText} = this.state
    return (
      <div className={styles.container}>
        <p>Search What you want?</p>
        <div className={styles.wrapperSearch}>
          <input value={searchText} onChange={this.changeSearchText} type="text" placeholder='Search ...' />
          <br />
          <br />
          <span>{searchText}</span>
        </div>
      </div>
    )
  }
}

export default Search;