'use strict';

function modMinute(minute, seconds){
  if(minute > 10){
    return minute - 1;
  }else{
    return 0 + "" + (minute - 1);
  }
}

function modSeconds(seconds){
  if(seconds > 10){
    return seconds - 1;
  }else{
    return 0 + "" + (seconds - 1);
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: '25',
      seconds: '00'
    };
  }

  tick() {

    if()

    this.setState(state => ({
      minutes: modMinute(state.minutes);
      seconds: modSeconds(state.seconds);
    }));
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return React.createElement(
      "div",
      null,

      this.state.minutes + ":" + this.state.seconds
    );
  }
}

const domContainer = document.querySelector('#timer-container');
ReactDOM.render(React.createElement(Timer, null), domContainer);

//
//
// const e = React.createElement;
//
// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }
//
//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }
//
//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }
//
// const domContainer = document.querySelector('#timer-container');
// ReactDOM.render(e(LikeButton), domContainer);
