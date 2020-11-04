import React from 'react';


class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      watched: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({name: e.target.value});
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.handleAddMovie(this.state)
    this.setState({name: ''})
  }

  render() {
    return (
      <div className="add-movie">
        <input
          id="addMovieInput"
          className="input"
          type="text"
          value={this.state.name}
          onChange={(e) => this.handleChange(e)}
          placeholder="Add movie title here"
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = 'Add movie title here'}
        />
        <button
          className="btn"
          type="button"
          onClick={this.handleSubmit}
        >Add</button>
      </div>
    );
  }

}

export default AddMovie;

