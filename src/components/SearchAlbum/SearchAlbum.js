import React from 'react';
import PropTypes from 'prop-types';
import './SearchAlbum.css';

class SearchAlbum extends React.Component {
  handleKeyPress = (target) => {
    if (target.charCode === 13) {
      this.button.click();
    }
  }

  render() {
    return (
      <div>
        <input
          className="SearchAlbum"
          type="text"
          placeholder="Search for an album"
          ref={input => this.input = input}
          onKeyPress={this.handleKeyPress}
        />
        <button
          className="SearchButton"
          onClick={() => this.props.search(this.input.value)}
          ref={button => this.button = button}
        >
          Search
        </button>
      </div>
    );
  }
}

SearchAlbum.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchAlbum;
