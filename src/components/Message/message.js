import './message.css';

function Message(props) {

    return (
        <p className={props.author === 'Bot' ? 'botMessage-text' : 'Message-text'}>
            {props.author}: {props.text}
        </p>
    )
}

export default Message;