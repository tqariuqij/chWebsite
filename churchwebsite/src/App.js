import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Navbar } from './Navbar.js';
import { Home } from './Pages/Home';
import { PreachingsAudio } from './Pages/Preachings/PreachingsAudio';
import { PreachingsVideo } from './Pages/Preachings/PreachingsVideos';
import { PreachingsWritten } from './Pages/Preachings/PreachingsWritten';
import { SongsAudio } from './Pages/Songs/AudioSongs';
import { SongsVideo } from './Pages/Songs/VideoSongs';
import { TestimoniesWritten } from './Pages/Testimonies/WrittenTestimonies';
import { TestimoniesAudio } from './Pages/Testimonies/AudioTestimonies';
import { TestimoniesVideo } from './Pages/Testimonies/VideoTestimonies';
import { Events } from './Pages/Events/Events';
// import { Foot } from '/components/footer/Foot';
// import { NoMatch } from './NoMatch';
// import { Layout } from './components/Layout';
//  import { Navbar } from './Navbar';
// import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/'./Pages/Preachings/PreachingsAudio';" component={PreachingsAudio} />
              <Route path="'./Pages/Preachings/PreachingsVideos'" component={PreachingsVideo} />
              <Route path="/Pages/Preachings/PreachingsWritten" component={PreachingsWritten} />
              <Route path="/Pages/Songs/VideoSongs" component={SongsVideo} />
              <Route path="/Pages/Songs/AudioSongs" Component={ SongsAudio } />
              <Route path="/Pages/Testimonies/WrittenTestimonies" component={TestimoniesWritten} />
              <Route path="/Pages/Testimonies/AudioTestimonies" component={TestimoniesAudio} />
              <Route path="/Pages/Testimonies/VideoTestimonies" component={TestimoniesVideo} />
              <Route path="/Pages/Events/Events" component={Events} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;