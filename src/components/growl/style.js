export default {
  growlContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    visibility: 'visible',
    position: 'absolute',
    zIndex: '10000'
  },
  message: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: ' 50px',
    background: 'red',
    margin: '5px 15px',
    borderRadius: '5px'
  },
  body: {
    textAlign: 'center',
    width: '90%',
    color: 'white'
  },
  close: {
    height: '-webkit-fill-available',
    paddingTop: '5px',
    color: 'white'
  },
  hide: {
    height: '0px',
    transition: 'visibility 0s, opacity 0.5s linear'
  }
};
