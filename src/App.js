import React from 'react';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import Nav from './components/Navbar/Navbar';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      {/* Banner */}

      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
