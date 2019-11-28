import React from 'react';


class SearchBar extends React.Component {

  state = {
    term:'',
  }

  onFormSubmit = (event) =>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.term)
  }

  render(){
    return (
        <form onSubmit={this.onFormSubmit}>
          <div className="ui fluid action input">
              <input type="text" placeholder="Search..." onChange={e => this.setState({term:e.target.value})} value={this.state.term}/>
              <button className="ui button red" >Search</button>
          </div>
      </form>
    )
  }
}

export default SearchBar;
