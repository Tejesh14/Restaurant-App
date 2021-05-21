const userData = document.getElementById('userData');
const restData = document.getElementById('restData');
const orderedData = document.getElementById('orderedData');
const totalPrice = document.getElementById('totalPrice');
let user;
let restaurant;
let item;

fetch("../Data/order_summary.json")
    .then(parseData=> parseData.json())
    .then((data)=>{
        restaurant = data.restaurant;
        // console.log(restaurant);

        restData.insertAdjacentHTML('afterbegin',`
            <p><b>Name:</b> ${restaurant.name}</p>
            <p><b>Street:</b> ${restaurant.street}</p>
            <p><b>City:</b> ${restaurant.city}</p>
            <p><b>State:</b> ${restaurant.state}</p>
            <p><b>Zip Code:</b> ${restaurant.zipcode}</p>
        `);

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

        item = data.items;
        console.log(item);

        for(let a of item){
            orderedData.insertAdjacentHTML('afterbegin',`
            <div class="card-body1">
                <p><b>Name:</b> ${a.name}</p>
                <p><b>Category:</b> ${a.category}</p>
                <p><b>Price:</b> ${a.price}</p>
                <p><b>Currency:</b> ${a.currency}</p>
                <p><b>Tax:</b> ${a.tax_pct}</p>
                <p><b>Quantity:</b> ${a.quantity}</p>
            </div>
        `)
        }

        let tax = item[0].tax_pct;
        let totalBeforeTax=0;
        let returnPrice = item.map(food =>{
            let price = parseInt(food.price);
            let quant = parseInt(food.quantity);
            return totalBeforeTax = price*quant;
        })

        totalBeforeTax= returnPrice.reduce((a, b) => a + b);
        tax = (totalBeforeTax * tax)/100;
        let totalAmount = totalBeforeTax + tax;
        
        totalPrice.insertAdjacentHTML('afterbegin',`
            <p><b>Total Price:</b> ${totalBeforeTax}</p>
            <p><b>Total Tax:</b> ${tax}</p>
            <p><b>Final Amount:</b> ${totalAmount}</p>
        `);

    })
    .catch(e=>{
        console.log(e);
    })