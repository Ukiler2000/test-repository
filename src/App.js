import logo from './logo.svg';
import './App.css';

function App() {
  const greeting = "Это тестовый проект Галка А.А";

  //console.log('This is App ');
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {greeting}
	 <p>Это новый абзац, добавленный после приветствия.</p>
      </header>
      <p>Это первый абзац</p>
      <p>Это второй абзац.</p>
      <p>Это третий абзац!</p>
    </div>
  );
}

export default App;
