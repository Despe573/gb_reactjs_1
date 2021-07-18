import './message.css';

function Message(props) {
    if (props.author === 'User') {
        return (
            <p className='Message-text'>{props.author}: {props.text}</p>
        );
    };
    if (props.author === 'Bot') {
        return (
            <p className='botMessage-text'>{props.author}: {props.text}</p>
        );
    }
}

export default Message;