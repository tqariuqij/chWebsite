import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Pages/Home';
import { PreachingsAudio } from './Pages/PreachingsAudio';
import { PreachingsVideo } from './Pages/PreachingsVideos';
import { PreachingsWritten } from './Pages/PreachingsWritten';
import { SongsAudio } from './Pages/AudioSongs';
import { SongsVideo } from './Pages/VideoSongs';
import { TestimoniesWritten } from './Pages/WrittenTestimonies';
import { TestimoniesAudio } from './Pages/AudioTestimonies';
import { TestimoniesVideo } from './Pages/VideoTestimonies';
import { Events } from './Pages/Events';
// import { Foot } from '/components/footer/Foot';
// import { NoMatch } from './NoMatch';
// import { Layout } from './components/Layout';
// import { Jumbotron } from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/'./Pages/PreachingsAudio';" component={PreachingsAudio} />
              <Route path="'./Pages/PreachingsVideos'" component={PreachingsVideo} />
              <Route path="/Pages/PreachingsWritten" component={PreachingsWritten} />
              <Route path="/Pages/VideoSongs" component={SongsVideo} />
              <Route path="/Pages/AudioSongs" Component={ SongsAudio } />
              <Route path="/Pages/WrittenTestimonies" component={TestimoniesWritten} />
              <Route path="/Pages/AudioTestimonies" component={TestimoniesAudio} />
              <Route path="/Pages/VideoTestimonies" component={TestimoniesVideo} />
              <Route path="/Pages/Events" component={Events} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;