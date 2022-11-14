import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StartingPage } from 'components/StartingPage'
import { AboutPage } from 'components/AboutPage'
import { PriceContact } from 'components/PriceAndContactPage'
import { ProjectsPage } from 'components/ProjectsPage'
/* import { Footer } from 'components/Footer' */
import { GlobalStyles } from 'styled-components/GlobalStyles'

export const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <main>
        <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/price" element={<PriceContact />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </BrowserRouter>
  )
}
