import React    from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.scss';
import './styles/globals.scss';

import Splash from './components/splash/splash';

class App extends React.Component {
  render() {
    return (
      <div>
        <Splash />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);