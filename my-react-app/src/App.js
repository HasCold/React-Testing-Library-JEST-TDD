import './App.css';

function App() {
  return (
    <div data-testid="myrootid">
      <h1>Testing Basics</h1>
      <div className='list'>
      <input type="text" placeholder="Type Something"/>
      {/* <button>Test Button</button> */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
      </div>
    </div>
  );
}

export default App;
