import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import './UserEdit.css';
import { profilEdit, setUserProfil } from '../../store/storeActions';
// import { userUpdateProfile } from '../../services/data.service';
import { storeSelector } from '../../store/storeSelectors';
import { userUpdateProfile } from '../../store/storeReducer';

/**
 * Component which displays inputs
 * for user profil update
 * 
 * @param {String} firstname 
 * @param {String} lastname 
 * 
 * @returns UserEdit component
 */
function UserEdit({firstname, lastname}) {
    const user = useSelector(storeSelector);
    const dispatch = useDispatch();

    const authToken = user.authToken;

    const handleCancelEdit = (e) => {
        e.preventDefault();

        dispatch(profilEdit());
    }

    const handleSaveEdit = (e) => {
        e.preventDefault();

        const newFirstName = document.querySelector("#firstname").value;
        const newLastName = document.querySelector("#lastname").value;

        dispatch(userUpdateProfile(newFirstName, newLastName, authToken));
    }

    return (
        <div className="user-edit">
            <input className="user-edit-input" id="firstname" type="text" defaultValue={firstname} />
            <input className="user-edit-input" id="lastname" type="text" defaultValue={lastname} />
            <button className="save-btn" onClick={(e) => handleSaveEdit(e)}>Save</button>
            <button className="cancel-btn" onClick={(e) => handleCancelEdit(e)}>Cancel</button>
        </div>
    )
}

UserEdit.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string
}

export default UserEdit;