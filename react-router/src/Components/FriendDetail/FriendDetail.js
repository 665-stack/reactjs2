import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data));
    }, [])
    // console.log(friend.address.city);
    return (
        <div>
            <h2>Detail about - {friend.name}</h2>
            <h3>Name: {friend.name}</h3>
            {/* akhane city ta show korate gelei error dicce. but baki shob tik ace. er karon hocce data load hote somoy lage. kinto prothome je useState set kore empty array diye dici shekhan thekei data load hoyar agei call kortece. jokhon empty array theke kono kicu load korte cacce jemon: friend.phone tokhon undifined dekhacce. But jokhon undifined theke data load korar cesta kortece tokhoni problem hocce. jemon: friend.address.city  . ar tai akhene ? mark use kora hoice. mane jodi address undifind hoy taile error dibe na. but undifind na hole city kei show korabe.sw */}

            <p>Phone: {friend.phone}</p>
            <p>Email: {friend.email}</p>
            <p>Website: {friend.website}</p>
            <p><small>City: {friend.address?.city}</small></p>
            <p><small>Lat: {friend.address?.geo?.lat}</small></p>


        </div>
    );
};

export default FriendDetail;