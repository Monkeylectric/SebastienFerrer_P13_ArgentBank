import PropTypes from 'prop-types';
import './InputWrapper.css';

/**
 * Component which displays input container
 * with label and input
 * 
 * @param {String} className 
 * @param {String} id 
 * @param {String} label 
 * @param {String} type 
 * 
 * @returns InputWrapper component
 */
function InputWrapper({className, id, label, type, error}) {
    return (
        <div className={className}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} />
            {error ? <span className='error-message'>{error}</span> : null}
        </div>
    )
}

InputWrapper.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    error: PropTypes.string,
}

export default InputWrapper;