import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'


const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID="2" title='Top Rated' fetchURL={requests.requestTopRated}/>
      <Row rowID="3" title='Trending' fetchURL={requests.requestTrending}/>
      <Row rowID="4" title='Up Coming' fetchURL={requests.requestUpcoming}/>
      <Row rowID="5" title='Popular' fetchURL={requests.requestPopular}/>
      <Row rowID="6" title='Recommended' fetchURL={requests.requestRecommendations}/>
    </>
  )
}

export default Home
