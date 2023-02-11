import React from 'react'
import { Connection, Intro, Feature, Cards, Testimonials } from '../../components'
import { Object1, Object2 } from './Data'

const Home = () => {
  return (
    <>
    <Intro />
    <Cards /> 
    <Feature {...Object2} />
    <Connection {...Object1} />   
    <Testimonials />
    </>
  )
}

export default Home