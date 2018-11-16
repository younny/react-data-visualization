import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Navigation } from './component/nav'
import { ThemeContext, themes } from './context/theme-context'

const Home = lazy(() => import('./route/home'))
const About = lazy(() => import('./route/about'))
const Projects = lazy(() => import('./route/projects'))
const ProjectDetails = lazy(() => import('./route/project-details'))

class App extends Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark 
          ? themes.light 
          : themes.dark
      }))
    }

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    }
  }

  render() {
    return (
        <ThemeContext.Provider value={this.state}>
          <Navigation />
          <Router>            
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route path="/projects/:id" component={ProjectDetails} />
              </Switch>
            </Suspense>
          </Router>
        </ThemeContext.Provider>
    )
  }
}

export default App;
