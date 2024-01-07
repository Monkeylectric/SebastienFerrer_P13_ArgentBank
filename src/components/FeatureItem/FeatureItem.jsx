import PropTypes from 'prop-types';
import './FeatureItem.css';

/**
 * Component which displays feature item 
 * whith an image, title and text
 * 
 * @param {String} src 
 * @param {String} alt 
 * @param {String} title 
 * @param {String} text 
 * 
 * @returns FeatureItem component
 */
function FeatureItem({src, alt, title, text}) {
    return (
        <div className="feature-item">
            <img src={src} alt={alt} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

FeatureItem.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string
}

export default FeatureItem;