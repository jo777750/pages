'use strict';
/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>Hello, world!</h1>); */

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
		return e(
          'span',
          {style:{color:"blue",background:"silver",fontSize:22}},
          'You liked this.'
          );
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));

