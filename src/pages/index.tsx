import type { NextPage } from 'next'
import { Fragment } from 'react'
import Ticker from '../components/base/Ticker'
import MainLayout from '../components/layouts/Main'
import Hero from '../components/sections/Hero'
import { indices } from '../data/indices.data'

const Home: NextPage = () => {
  return (
    <Fragment>
      <MainLayout>
        <Ticker data={indices} />
        <Hero />
      </MainLayout>
    </Fragment>
  )
}

export default Home
