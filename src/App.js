import './App.css';

function App() {
  var name = 'hello';
  var className = 'App-header'
  return (
    <div className="App">
      <div className={className}>
        {name}
      <Demo></Demo>
      </div>
    </div>
  );
}

function Demo(){
  return <div>Demo</div>
}

export default App;
