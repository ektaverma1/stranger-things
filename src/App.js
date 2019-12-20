import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Inspiration from "./Components/Inspiration/Inspiration";
import dummyText from "./DummyText";
//import LocalizedStrings from "react-localization";
import Gallery from "./Components/Gallery/Gallery";
import Episodes from "./Components/Episodes/Episodes";

// let strings = new LocalizedStrings({
//   en:{
//   },
//   la: {
//   }
//  });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    }
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState(prevState => ({
      lang: lang
    }))
  }

  render() {
    //strings.setLanguage(this.state.language);
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Inspiration
          title="Inspiration"
          subtitle={dummyText}
          dark={true}
          id="section1"
        />
        <Gallery
          title="Gallery"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Episodes
          title="Episodes"
          subtitle={dummyText}
          dark={true}
          id="section3"
        />
      </div>
    );
  }
}

export default App;
