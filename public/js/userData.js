const userData = document.getElementById('userData');

let user;

fetch("../Data/order_summary.json")
    .then(parseData=> parseData.json())
    .then(data=>{
        user = data.user;
        // console.log(user);
        userData.insertAdjacentHTML('afterbegin',`
            <p><b>Id:</b> ${user.id}</p>
            <p><b>Name:</b> ${user.name}</p>
            <p><b>About:</b> ${user.about}</p>
            <p><b>Address:</b> ${user.address}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Likes:</b> ${user.likes}</p>
            <p><b>Dislikes:</b> ${user.dislikes}</p>
        `);
    })
    .catch(e=>{
        console.log(e);
    })