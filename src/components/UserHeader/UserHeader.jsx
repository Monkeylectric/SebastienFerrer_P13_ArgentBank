import './UserHeader.css';
import PropTypes from 'prop-types';
import UserEdit from '../UserEdit/UserEdit';
import { useDispatch, useSelector } from 'react-redux';
import { storeSelector } from '../../store/storeSelectors';
import { profilEdit } from '../../store/storeActions';

/**
 * Component which displays user's information 
 * in header part if he's connected
 * 
 * @param {String} firstname 
 * @param {String} lastname 
 * 
 * @returns UserHeader Component
 */
function UserHeader({firstname, lastname}) {
    const user = useSelector(storeSelector);
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();

        dispatch(profilEdit());
    }

    return (
        <div className="header">
            <h1>Welcome back</h1>
            <div className="user">
                {
                    user.isUserEdit ? 
                    <UserEdit firstname={user.userFirstName} lastname={user.userLastName} />
                    : 
                    <>
                        <h1>{firstname} {lastname}!</h1>
                        <button className="edit-button" onClick={(e) => handleEdit(e)}>Edit Name</button>
                    </>
                }
                
            </div>
        </div>
    )
}

UserHeader.propTypes = {
    firstname: PropTypes.string,
    lastname: PropTypes.string
}

export default UserHeader;