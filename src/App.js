import Search from './components/search/Search';
import './App.css';

function App() {
  const onSearchChangeHandler = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className='container'>
      <Search onSearchChange={onSearchChangeHandler} />
    </div>
  );
}

export default App;
