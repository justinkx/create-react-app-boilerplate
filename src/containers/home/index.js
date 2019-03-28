import React, { Component } from 'react'
import { connect } from 'react-redux';
import { newGrowlMessage } from '../../components/growl/actions';
import request from '../../services/fetch';

class HomePage extends Component {
  constructor(props) {
    super(props);

  }
  insertMessage = () => {
    this.props.insertMessage();
    request("https://jsonplaceholder.typicode.com/posts", "post", {
      title: 'foo',
      body: 'bar',
      userId: 1
    })
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(process.env);
    return (
      <div>
        Home
        <button onClick={()=> {this.insertMessage()}}>UPDATE</button>
      </div>
    )
  }
  componentDidMount() {
    // if (!localStorage.getItem('router')) {
    //   this.props.history.push('/login'); 
    // }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
    insertMessage: () => dispatch(newGrowlMessage({text: 'message'}))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
