import React from 'react';
import usePrevious from '../hooks/usePrevious.js';
import './App.css';
import Message from '../Message/message.js';

const authors = { User: 'User', Bot: 'Bot' };

function App() {
  const [messageList, setMessageList] = React.useState([]);
  const [messageFormValue, setMessageFormValue] = React.useState('');

  React.useEffect(() => {
    if (messageList.length && messageList[messageList.length - 1].author !== authors.Bot) {
      setTimeout(() => {
        setMessageList((previousMessageList) => {
          let arr = [...previousMessageList, { author: authors.Bot, text: "Оператор ответит вам позже." }];
          let newArr = arr.map((item, index) => {
            return { id: index + 1, author: item.author, text: item.text }
          })

          return [...newArr]
        })
      }, 1500)
    }
  }, [messageList]);

  const messageFormChange = (event) => {
    setMessageFormValue(event.target.value)
  };

  const MessageFormSubmit = (event) => {
    event.preventDefault();
    setMessageList((previousMessageList) => {
      let arr = [...previousMessageList, { author: authors.User, text: messageFormValue }];
      let newArr = arr.map((item, index) => {
        return { id: index + 1, author: item.author, text: item.text }
      })

      return [...newArr]
    });
    setMessageFormValue('');
  };


  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            My first ReactApp
          </p>
        </header>
        <section className='chat__field'>
          <div className='messages__field'>
            {messageList.map((message) => (
              < Message key={message.id} text={message.text} author={message.author} />
            ))}
          </div>
          <form className='messages__form' onSubmit={MessageFormSubmit}>
            <input
              className='messages__form_input'
              value={messageFormValue}
              onChange={messageFormChange}
              placeholder="Введите сообщение"
              required
            ></input>
            <button className='messages__form_button'>Отправить</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default App;
