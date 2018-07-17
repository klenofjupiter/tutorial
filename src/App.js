import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Leigh Steiner: Portfolio</h1>
        </header>
        <ul>
          <li>
           <span className="item-title">Functional Pivot Analyzer (beta)</span>
           <span className="item-description"> A tool for creating visualizations based on EEOC and census data, using the patented Locus Model. </span>
           <span className="build-tools">Built with D3, React, Django and Postgres</span>
           <span className="location">URL: <a href="https://fpa-locus.herokuapp.com/">https://fpa-locus.herokuapp.com/</a> <br/>Github: Private</span>
          </li>
          <li className="right"> <img src="fpa.png" /> </li>
          <li>
           <span className="item-title">The Ocean</span>
           <span className="item-description"> A profile-free dating site</span>
           <span className="build-tools">Built with D3, React, Redux, Express and Postgres</span>
           <span className="location">URL: <a href="http://the-slow-ocean.herokuapp.com/">http://the-slow-ocean.herokuapp.com/</a> <br/> Github: <a href="https://github.com/LeighSteiner/theOcean">https://github.com/LeighSteiner/theOcean</a></span>
          </li>
          <li className="right"> <img src="theOcean.png" /> </li>
          <li>
           <span className="item-title">SlYDV: Slides for Coders</span>
           <span className="item-description"> A tool for making presentation materials aimed at developers, which accepts markdown and provides an in-slide repl.</span>
           <span className="build-tools">Built with Deque, React, Redux, Express and Postgres</span>
           <span className="location">URL: <a href="http://slydv.tech/">http://slydv.tech</a><br/> Github: <a href="https://github.com/EvilDeds/slydv">https://github.com/EvilDeds/slydv</a></span>
          </li>
          <li className="right"> <img src="slydv.png" /> </li>
          <li>
           <span className="item-title">Science Fiction Double Feature</span>
           <span className="item-description"> A teaching-aid for React, Redux, and CSS animation in the form of a small GoodReads clone</span>
           <span className="build-tools">Built with React, Redux, Express and Postgres</span>
           <span className="location">Github: <a href="https://github.com/LeighSteiner/science-fiction-double-feature">https://github.com/LeighSteiner/science-fiction-double-feature</a></span>
          </li>
          <li className="right"> <img src="scifi.png" /> </li>
          <li>
           <span className="item-title">Klen Secure</span>
           <span className="item-description"> An NPM module for handling route authorization, IP tracking, and clearance, with settings for Express and Koa</span>
           <span className="build-tools">Built with ES6</span>
           <span className="location">URL: <a href="https://www.npmjs.com/package/klen-secure">https://www.npmjs.com/package/klen-secure</a><br/> Github: <a href="https://github.com/LeighSteiner/klen-secure-2">https://github.com/LeighSteiner/klen-secure-2</a></span>
          </li>
          <li>
            <span>You can also check out my technical blog here: <a href="https://medium.com/@steinerleigh">https://medium.com/@steinerleigh</a> </span>
          </li>


        </ul>
      </div>
    );
  }
}

export default App;
