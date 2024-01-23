import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Layout from './components/layout'
import './app.scss'
import Portfolio from './components/portfolio'
import Project from './components/project'
import AnimatedLoader from './components/animatedloader'

function App() {

  const [scrollPercent, setScrollPercent] = useState(0);
  const [loaderName, setLoaderName] = useState('loader')

  useEffect(() => {
    setTimeout(() => {
      return setLoaderName('loader loader-end');
    }, 3000)
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout scrollPercent={scrollPercent} />}>
          <Route index element={<Home scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} />} />
          <Route path="about" element={<About scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} />} />
          <Route path="portfolio" element={<Portfolio scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} />} />
          <Route path="portfolio/:selectionId/:projectId" element={<Project scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} />} />
          <Route path="contact" element={<Contact scrollPercent={scrollPercent} setScrollPercent={setScrollPercent} />} />
        </Route>
      </Routes>
      <AnimatedLoader loaderName={loaderName} />
    </>
  )
}

export default App