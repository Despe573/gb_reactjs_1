import './App.css';
import Message from '../Message/message';

const messageText = 'My first Message';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            My first ReactApp
          </p>
        </header>
        <div>
          <Message text={messageText} />
        </div>
      </div>
    </>
  );
}

export default App;
