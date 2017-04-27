import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import YouTube from 'react-youtube';
import Slider from 'react-slick';

import Header from './header';
import Nav from './nav';

import styles from './css/index.css';

class Portfolio extends Component {
  static propTypes = {
    styles: PropTypes.object
  }

  handleMobile() {
    if (window.innerWidth <= 600) {
      document.documentElement.classList.add('nav-hidden');
    }
  }

  render() {
    return (
      <div styleName="component">
        <Header />
        <section styleName="body">
          <div styleName="margin"></div>
          <div styleName="container">
            <section styleName="nav">
              <Nav />
            </section>
            <main styleName="main" onClick={this.handleMobile} >
              <p styleName="notice">
                I am considering work in San Francisco as well as remote work. The only real requirements I have are: I want to work on a product I can care about; and I want to be in an environment where I can grow as an engineer and as a person.
              </p>
              <article>
                <div id="intro" styleName="anchor"></div>
                <h2>How It All Started</h2>
                <p>
                  <b>Middle school.</b> "Borrowed" a book on QBasic. Made ASCII games. Fancied myself as an elite hacker of sorts, even though the B in Basic stands for <i>beginner</i>.
                </p><p>
                  <b>Early high school.</b> Upgraded to Visual Basic 6 which I used to make AOL progs. Discovered the wonders of table-based HTML layouts. Made my first website, a web portal plastered with ads. Became a common "view source" thief.
                </p><p>
                  <b>Late high school.</b> Made my foray into backend web with ASP Classic. Built a Dance Dance Revolution fan site. Saw the movie <i>Hackers</i> starring Jonny Lee Miller and Angelina Jolie, which caused me to further romanticize elite hackerdom.
                </p><p>
                  <b>College.</b> Studied math instead of CS. Made a poor man's version of Flickr. Became fascinated with casino games. Studied PHP instead of Perl. Made a math forum (vaporware).
                </p><p>
                  <b>Post college.</b> Tricked out my MySpace page. Made a fan site for an indie rock band. Became obsessed with poker. Mined some bitcoins. Sold them like a dummy. Started taking software more seriously with none other than JavaScript. Realized I was noob.
                </p><p>
                  <em>The rest of this page tells the ongoing story of how I incrementally get better at programming.</em>
                </p>
              </article>
              <article>
                <div id="favorite" styleName="anchor"></div>
                <h2>Favorite Projects</h2>
                <h3>Bitpoker</h3>
                <div styleName="figure-video">
                  <div styleName="video">
                    <YouTube videoId="lMT7R9yU3bE" opts={{
                      width: 640,
                      height: 360,
                      playerVars: {
                        controls: 1,
                        showinfo: 0,
                        modestbranding: 1,
                        fs: 0,
                        cc_load_policy: 0,
                        iv_load_policy: 3,
                        autohide: 0
                      }
                    }} />
                  </div>
                  <div styleName="caption">Multi-table social poker</div>
                </div>
                <p>
                  Just before Bitcoin's first ascent above a thousand USD, I had been mining coins and using them to play on unvetted poker sites. These sites rushed online to serve a U.S. player base which had few playing options following the online poker crackdown known as <a href="https://en.wikipedia.org/wiki/United_States_v._Scheinberg" target="_blank" rel="noopener">Black Friday</a>. Corners cut on software in the Wild West of Bitcoin gambling left a lot to be desired in user experience, particularly the poker player's experience. I felt as a lover of poker and programming that I had something to add.
                </p><p>
                  The U.S. having such an unfriendly legal environment for operating a real-money gambling site, I could only fantasize about entering that space. Bitpoker would remain a toy project until its eventual launch on Facebook in 2015 as a free-to-play desktop game.
                </p><p>
                  Developing Bitpoker was a way for me to fulfill my love for games of chance while leveling up my newfound interest in JavaScript, at a time when the world of JavaScript frameworks and libraries was bustling and fragmented&mdash;I suspect at the time of this reading that this is still the case. The challenge of building a full-stack JavaScript product turned out to be hugely rewarding, and this was the project on which I cut my JavaScript teeth.
                </p><p>
                  Bitpoker was built on Angular 1.x and Node.js. A React prerelease exists (which may never see the light of day) and represents a significant rewrite. I learned a lot about component-based JavaScript on the frontend and event-based JavaScript on the backend. I learned the performance consequences of updating the DOM and the code manageability consequences of deeply nested callbacks. Most of all I learned how to better manage application state.
                </p>
              </article>
              <article>
                <div id="hackathons" styleName="anchor"></div>
                <h2>Hackathons</h2>
                <div styleName="figure-video">
                  <div styleName="video">
                    <YouTube videoId="yxYbPGfH2iU" opts={{
                      width: 640,
                      height: 360,
                      playerVars: {
                        controls: 1,
                        showinfo: 0,
                        modestbranding: 1,
                        fs: 0,
                        cc_load_policy: 0,
                        iv_load_policy: 3,
                        autohide: 0
                      }
                    }} />
                  </div>
                  <div styleName="caption">I'm in the bottom-left corner sometimes.</div>
                </div>
                <p>
                  The annual Valley Hackathon draws participants from the Bay and from the Valley's tech community spanning Sacramento, Stockton, Modesto, Merced, and Fresno. In the two events I had the privilege of competing in, both of my projects picked up awards. Movies &amp; Chill received the 2015 Participants' Choice, and Come Fight Me received the 2016 Participants' Choice as well as 2nd place. I also won a gift card to a nice restaurant which I have been saving to celebrate being hired by Your Company.
                </p>
                <h3>Movies &amp; Chill</h3>
                <div styleName="slider-movieschill">
                  <Slider settings={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }}>
                    <div><a href={require('./img/movieschill-desktop.png')} target="_blank" rel="noopener"><img src={require('./img/movieschill-desktop.png')} /></a></div>
                    <div><a href={require('./img/movieschill-mobile.png')} target="_blank" rel="noopener"><img src={require('./img/movieschill-mobile.png')} /></a></div>
                  </Slider>
                </div>
                <p>
                  I spend a good amount of time watching movies, so I spend a good amount of time choosing which ones to watch. What I feel like watching is tough to pin down by genre, and recommenders sometimes consider too much about my watching habits. I wanted something closer to mood, not only in what I feel like watching but how I want to feel after watching. Movies &amp; Chill attempts to take a movie and recommend other movies which had similar emotional effects on viewers. The results often cross genre lines. A look at how the app works can be had at its <a href="https://github.com/loctn/movieschill" target="_blank" rel="noopener">GitHub</a> repo.
                </p>
                <p>
                  Movies &amp; Chill was overly ambitious for a 24-hour hackathon flying solo, but I was lucky enough to present a working product by the skin of my teeth. I hadn't done a hackathon prior and saw this project as an opportunity to knock one off my "ideas" list. It would also give me a chance to learn a new JavaScript framework in the weeks after the hackathon to spruce up the prototype. In this case I got to dig into both Angular 2 and React, having previously defaulted to Angular 1.x. The app has since been furnished with a responsive-adaptive UI and autocomplete search.
                </p>
                <h3>Come Fight Me</h3>
                <div styleName="figure-comefightme">
                  <a href={require('./img/comefightme.jpg')} target="_blank" rel="noopener"><img src={require('./img/comefightme.jpg')} /></a>
                  <div styleName="caption">Battle a nearby friend by swinging your smartphone!</div>
                </div>
                <p>
                  To over-correct for the time and stress issues I had in my previous hackathon experience, I chose a simpler idea and sought out a developer team for a helping hand. Literally the project needed more <em>hands</em>. Come Fight Me simulates lightsaber battles using accelerometer data from mobile devices, and gives <em>pew pew</em> along with vibration feedback. The plan was to have the hackathon audience engage in a lightsaber war. Users enter a 3-character code (as shown above) and are paired in a temporary session until someone wins.
                </p>
                <p>
                  My team was able to pull this off for both Android and iOS devices by fiddling around with the <code>devicemotion</code> and <code>deviceorientation</code> web APIs. This was a vanilla JavaScript app powered by Node.js and WebSockets. We learned about the differences in mobile Chrome vs. Safari's access to audio playback and vibration. We learned about mitigating the user experience effects of latency in real-time games. We learned how to argue about what constitutes a proper lightsaber swing.
                </p>
              </article>
              <article>
                <div id="past" styleName="anchor"></div>
                <h2>Past Projects</h2>
                <h3>BridgingBuilders</h3>
                <div styleName="figure-bridgingbuilders">
                  <a href={require('./img/bridgingbuilders.png')} target="_blank" rel="noopener"><img src={require('./img/bridgingbuilders.png')} /></a>
                </div>
                <p>
                  Back when internet products for construction was a wide-open space, I teamed up with a civil engineer friend to tackle a platform for construction professionals such as architects, engineers, and interior designers. The space is now blossoming with startups like <a href="https://www.plangrid.com/" target="_blank" rel="noopener">PlanGrid</a> and 1,500 others in the <a href="https://angel.co/construction" target="_blank" rel="noopener">AngelList</a> database. We were underpowered for the scope of the product which in retrospect should have had a narrower focus. BridgingBuilders' closest example in the wild is <a href="https://www.buildingconnected.com/" target="_blank" rel="noopener">BuildingConnected</a>.
                </p>
                <p>
                  Like all web products JavaScript was involved, but this one was heavier on the backend which was built on PHP. There were a number of classical web problems to solve in implementing dashboards, inboxes, forums, and distance search, which exposed me to thinking about databases, especially MySQL, and planning for scale.
                </p>
                <h3>HoldemViewer</h3>
                <div styleName="slider">
                  <Slider settings={{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }}>
                    <div><a href={require('./img/holdemviewer1.png')} target="_blank" rel="noopener"><img src={require('./img/holdemviewer1.png')} /></a></div>
                    <div><a href={require('./img/holdemviewer2.png')} target="_blank" rel="noopener"><img src={require('./img/holdemviewer2.png')} /></a></div>
                    <div><a href={require('./img/holdemviewer3.png')} target="_blank" rel="noopener"><img src={require('./img/holdemviewer3.png')} /></a></div>
                  </Slider>
                </div>
                <p>
                  Once upon a time I was a serious student of card games, mostly blackjack and Texas Holdem poker. <a href="http://www.bigbetsoftware.com/holdemviewer" target="_blank" rel="noopener">HoldemViewer</a> was born out of the frustration of doing certain poker calculations one at a time. It's like a spreadsheet upgrade from a calculator for Holdem preflop ranges (lingo alert). The main feature allows a player to visualize how all starting hands perform against a bunch of unknown but conceivable opponent holdings. The app was the beginning of a suite of poker tools I had planned before the poker market <a href="https://en.wikipedia.org/wiki/United_States_v._Scheinberg" target="_blank" rel="noopener">took a dive</a>.
                </p>
                <p>
                  HoldemViewer was one of the last apps I built using Visual Basic Classic. The project was an exercise in <a href="https://archive.is/wM0ER" target="_blank" rel="noopener">algorithmic techniques for optimizing hand evaluators</a>. At the same time it was a UI challenge in creating a compact interface for online poker players whose screen real estate is saturated with poker windows.
                </p>
              </article>
              <article>
                <div id="learn" styleName="anchor"></div>
                <h2>Learn More</h2>
                <p>
                  Samples of my code can be found on my <a href="https://github.com/loctn" target="_blank" rel="noopener">GitHub</a> and <a href="https://discuss.leetcode.com/user/loctn" target="_blank" rel="noopener">LeetCode</a> profiles.
                </p><p>
                  I can be reached on <a href="https://github.com/loctn" target="_blank" rel="noopener">LinkedIn</a> or by email. If you need a JavaScript developer please reach out to me via email at the address on my <a href="http://locwin.com/resume/" target="_blank" rel="noopener">resume</a>.
                </p>
                <p>
                  If you read this far, thank you.
                </p>
              </article>
            </main>
          </div>
          <div styleName="margin"></div>
        </section>
      </div>
    );
  }
}

export default CSSModules(Portfolio, styles);