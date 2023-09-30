import './Profil.css';

function Profil(props) {
    return (
        <button className="profil">
            <img className="profil_picture" src={props.picture} alt="Profile Picture" />
            <span className="profil_name">{props.name}</span>
        </button> 
    )
}

export default Profil;