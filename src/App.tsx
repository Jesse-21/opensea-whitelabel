import React from 'react';
import { ASSET_URL, CHOSEN_THEME } from './constants'
import logo from './static/images/logo.png';
import './static/styles/App.css';
import { iframeResizer } from 'iframe-resizer'
import './static/styles/App.css';

const embeddedUrl = `${ASSET_URL}?embed=${CHOSEN_THEME}`

class App extends React.Component {

  componentDidMount() {
    iframeResizer({ log: false }, '#opensea-iframe')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            
          </p>
          <i className="material-icons right">menu</i>
        </header>
        <main className="App-main">
          <div className="App-hero">
            <p>
              Of1 NFT
            </p>
            <small>Digital Art and collectibles</small>
          </div>
          <iframe id="opensea-iframe" title="Embedded OpenSea Marketplace" src={embeddedUrl} width='1200px' height='800px' frameBorder='0' allowFullScreen></iframe>
        </main>
        
      </div>
    );
  }
}

export default App;
