import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import style from './App.css'
import json from './resume.json';
import Profile from './components/Profile'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Education from './components/Education'

const Body = styled.div`
font-family: 'Source Sans Pro', sans-serif;
background-color: white;
width: calc(100% - 6rem);
padding: 0.8rem 3rem;
`
const MainContainer = styled.div`
text-align: center;
`

const CV = styled.div`
display: inline-block;
margin-right: 0;
vertical-align: top;
overflow: hidden;
`


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <div className="inner">
              <Profile profileData={json.basics} />
            </div>
          </aside>
          <main className="col-md-8">
            <div className="inner">
              <CV>
              <About aboutData={json.basics.summary} />
              <Work workData={json.work}/>
              <Skills skillsData={json.skills}/>
              <Education educationData={json.education} />
                </CV>
            </div>
          </main>
        </div>
      </div>
      //<div></div>
    );
  }
}

export default App;
