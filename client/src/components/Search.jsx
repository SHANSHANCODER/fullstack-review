import React from 'react';
import axios from 'axios';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this)
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });

  }

  search() {
    //send an axios post request with the term to '/repos' with a server post request callback
    axios
    .post('/repos',{username:this.state.term})
    .then(function(response){
      console.log("request is sent")
    console.log(response)
    })

    this.props.onSearch(this.state.term);
  }


  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.terms} onChange={this.onChange}/>
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;