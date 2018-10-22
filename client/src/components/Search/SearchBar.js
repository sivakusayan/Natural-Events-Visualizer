import React from 'react';

export default class SearchBar extends React.Component {
  state = {
    searchValue: '',
  };

  onSearchChange = (e) => {
    const search = e.target.value;
    this.setState({ searchValue: search });
  };

  render() {
    const { searchValue } = this.state;
    return (
      <form>
        <input
          type='search'
          placeholder='Search here'
          value={searchValue}
          onChange={this.onSearchChange}
        />
      </form>
    );
  }
}
