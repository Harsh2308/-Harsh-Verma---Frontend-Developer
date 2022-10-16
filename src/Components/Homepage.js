import { Divider } from '@mui/material'
import React from 'react'
import  Footer  from './Footer'
import Header from './Header'
import MsgSection from './MsgSection'
import Section from './Section'
import SectionScroll from './SectionScroll'

function Homepage() {
  return (
    <div className="cointainer" >
     <Header />
     <Divider />
     <Section />
     <Divider />
     <SectionScroll />
     <Divider />
     <MsgSection />
     <Divider />
     <Footer />

    </div>
  )
}

export default Homepage