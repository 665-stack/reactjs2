import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Friend = (props) => {
    const { name, username, id } = props.friend;
    const navigate = useNavigate();
    const showFriendDetail = () => {
        navigate(`/friend/${id}`)
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            {/* akhane <Link> tag er to er modde jei link path ta deya hoice ataio akta system link set korar. */}
            <Link to={'/friend/' + id}>Show Detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;