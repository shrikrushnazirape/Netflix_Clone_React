import './App.css';
import Row from './components/Row';
import requests from './requests'
import Navbar from './components/Navbar'
import Banner from './components/Banner'


// a0db103332850aeb276206221f66ddd2

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Row title = "Netflix originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title = "trending now " fetchUrl={requests.fetchTrending}/>
    <Row title = " Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title = "Action movies " fetchUrl={requests.fetchActionMovies}/>
    <Row title = "comedy movies " fetchUrl={requests.fetchComedyMovies}/>
    <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title = "Romantic Movies" fetchUrl={requests.fetchRomanticMovies}/>
    <Row title = "Documentaries" fetchUrl={requests.fetchocumentaries}/>


    </div>
  );
}

export default App;
