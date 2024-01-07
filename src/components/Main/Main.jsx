import PropTypes from 'prop-types';
import './Main.css';

/**
 * Component for main section
 * 
 * @param {DOMElement} children 
 * @param {String} className
 * 
 * @returns Main component
 */
function Main({children, className}) {
    return (
        <main className={className}>
            {children}
        </main>
    )
}

Main.propTypes = {
    className: PropTypes.string,
}

export default Main;