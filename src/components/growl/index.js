import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './style';

class GrowlComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  componentWillReceiveProps(nextProps) {
    const messages = [...this.state.messages];
    messages.push(nextProps.message);
    this.setState({ messages });
    setTimeout(() => {
      const timedOut = [...this.state.messages];
      timedOut.shift();
      this.setState({ messages: timedOut });
    }, 2000);
  }
  close = index => {
    const messages = [...this.state.messages];
    messages.splice(index, 1);
    this.setState({ messages });
  };
  render() {
    console.log(this.state);
    console.log(this.props);
    
    return (
      <div style={styles.growlContainer}>
        {this.state.messages.map((message, index) => (
          <div style={styles.message} key={index}>
            <p style={styles.body}>{message.text}</p>
            <i
              onClick={() => this.close(index)}
              className="fa fa-times"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    );
  }
  componentDidMount() {
    console.log('did mount');
    const arr = this.state.messages;
    arr.push(this.props.message);
    this.setState({
      messages: arr
    });
  }
}
const mapStateToProps = state => {
  const { growl } = state;
  return {
    message: growl.message
  };
};

export default connect(mapStateToProps)(GrowlComponent);
