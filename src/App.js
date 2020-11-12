import React, { Component } from 'react';
import { MainLayout } from './components/Shared/Layouts/MainLayout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
 constructor(props) {
    super(props);
      this.state = {
      };
  }

  render() {
    return (
      <div className="App">
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossOrigin></script>
        <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossOrigin></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
        <MainLayout />
    </div>
    );
  }
}
export default App;