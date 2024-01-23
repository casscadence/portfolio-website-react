import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import AnimatedLoader from './components/AnimatedLoader'

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