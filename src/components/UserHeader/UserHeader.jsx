import './UserHeader.css';
import UserEdit from '../UserEdit/UserEdit';
import { useDispatch, useSelector } from 'react-redux';
import { storeSelector } from '../../store/storeSelectors';
import { profilEdit } from '../../store/storeActions';

function UserHeader(props) {
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
                        <h1>{props.firstname} {props.lastname}!</h1>
                        <button className="edit-button" onClick={(e) => handleEdit(e)}>Edit Name</button>
                    </>
                }
                
            </div>
        </div>
    )
}

export default UserHeader;