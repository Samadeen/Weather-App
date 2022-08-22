import Search from './components/Search/Search';
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import './App.css';

function App() {
  const onSearchChangeHandler = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className='container'>
      <Search onSearchChange={onSearchChangeHandler} />
      <CurrentWeather/>
    </div>
  );
}

export default App;
