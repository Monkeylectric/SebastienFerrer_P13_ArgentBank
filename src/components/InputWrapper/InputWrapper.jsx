import './InputWrapper.css';

function InputWrapper(props) {
    return (
        <div className={props.className}>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} id={props.id} />
        </div>
    )
}

export default InputWrapper;