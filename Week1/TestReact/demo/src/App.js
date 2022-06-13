import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <html>
      <head>
        <title>Hello Dojo</title>
      </head>
      <body>
      <div className="container">
          <h1>Hello Dojo!</h1>
          <div className="toDoList">
            <h3>Things I need to do:</h3>
            <ul>
              <li>Learn React</li>
              <li>Climb Mt. Everest</li>
              <li>Run a marathon</li>
              <li>Feed the dogs</li>
            </ul>
          </div>
        </div>
      </body>        
    </html>
  );
}

export default App;
