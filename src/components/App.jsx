class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      video: exampleVideoData[0]
    };
  }

  onTitleClick (video) {
    this.setState({ video: video });
  }

	


  render () {		
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={ this.state.video } />
        </div>
        <div className="col-md-5">
{/*can pass the methods through on the JSX references in an attribute*/}
{/**/}
          <VideoList handleClick={ this.onTitleClick.bind(this) } videos={ exampleVideoData }/>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;


