import PropTypes from 'prop-types';
import './Hero.css';

/**
 * Compoent which displays hero banner 
 * component with subtitles and text
 * 
 * @param {Object} subtitles 
 * @param {String} text 
 * 
 * @returns Hero component
 */
function Hero({subtitles, text}) {
    return (
        <div className="hero">
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                {subtitles.map((subtitle, index) => (
                    <p key={index} className="subtitle">{subtitle}</p>
                ))}
                <p className="text">{text}</p>
            </section>
        </div>
    )
}

Hero.propTypes = {
    subtitles: PropTypes.array,
    text: PropTypes.string,
}

export default Hero;