import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value : ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   this.setState({value: 'Search...'});
  // }

  handleChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearchInput(this.state.value)
    this.setState({value: ''})
  }

  render() {
    return (
      <div className="search">
        <input
          className="input"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search..."
              onFocus={(e) => e.target.placeholder = ''}
              onBlur={(e) => e.target.placeholder = 'Search...'}
        />
        <button type='button' className="btn"
          onClick={this.handleSubmit}
        >Go!</button>
      </div>
    );
  }
}

export default Search;