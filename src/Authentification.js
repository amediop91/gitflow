import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  render() {
    return <h1>Bonjour Amadou! header</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById('root'));

export default Header;