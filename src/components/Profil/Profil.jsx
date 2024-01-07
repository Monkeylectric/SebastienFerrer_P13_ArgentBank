import PropTypes from 'prop-types';
import './Profil.css';

/**
 * Component which displays profil image
 * and profil name
 * 
 * @param {String} picture 
 * @param {String} name 
 * 
 * @returns Profil component
 */
function Profil({picture, name}) {
    return (
        <button className="profil">
            <img className="profil_picture" src={picture} alt="Profile Picture" />
            <span className="profil_name">{name}</span>
        </button> 
    )
}

Profil.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string
}

export default Profil;