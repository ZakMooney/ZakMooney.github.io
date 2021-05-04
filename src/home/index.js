import moon from '../moon.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
        <div className="moon-con">
            <img src={moon} className="moon" alt="logo" />
            <div className="moonpulse"></div>
        </div>
        <h1>MOONZ</h1>
    </div>
  );
}

export default Home;
