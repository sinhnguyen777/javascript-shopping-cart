function totalsCart(){
    const totals = document.querySelector('#totalsCart')
    const get = JSON.parse(localStorage.getItem('totalCost'))
    totals.innerHTML = `<strong>£0</strong>`
}
totalsCart()

const url = 'http://localhost:3000/'

const fetchApi = async (url, option) =>{
    const res = await fetch(url, option)
    return res.json()
}

const checkout = async () => {
    const name = document.querySelector('#fullName').value
    const address = document.querySelector('#address').value
    const email = document.querySelector('#email').value
    const phone = document.querySelector('#phone').value
    const get = JSON.parse(localStorage.getItem('totalCost'))

    var pattenName = /^[a-zA-Z0-9]+$/gm

    var checkName = pattenName.test(name)
    var checkAdderss = address != '' && address.length > 6
    
    var patten = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm
    var checkEmail = patten.test(email)

    var patten2 = /((09|03|07|08|05)+([0-9]{8})\b)/g
    var checkPhone = patten2.test(phone)

    var today = new Date()
    var date = today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date + ' ' + time
    console.log(dateTime);
    // var datetime = currentdate.getDay() + "/" + currentdate.getMonth() + "/" + currentdate.getFullYear() + "  " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    // check name
    if (name == '') {
        document.getElementById('nameHelp').innerText = 'Nhap ten'
    }else if(checkName == false){
        document.getElementById('nameHelp').innerText = 'Nhap ten hop le'
    }else {
        document.getElementById('nameHelp').innerText = ''
    }
    // check dia chi
    if (address == '') {
        document.getElementById('addressHelp').innerText = 'Nhap dia chi'
    } else if(checkAdderss == false){
        document.getElementById('addressHelp').innerText = 'Nhap dia chi hop le'
    } else {
        document.getElementById('addressHelp').innerText = ''
    }
    // check email
    if (email == '') {
        document.getElementById('emailHelp').innerText = 'Nhap email'
    }else if(checkEmail == false){
        document.getElementById('emailHelp').innerText = 'Nhap email hop le'
    }else {
        document.getElementById('emailHelp').innerText = ''
    }
    // check phone number
    if (phone == '') {
        document.getElementById('phoneHelp').innerText = 'Nhap so dien thoai'
    }else if(checkPhone == false){
        document.getElementById('phoneHelp').innerText = 'Nhap so dien thoai hop le'
    } else {
        document.getElementById('phoneHelp').innerText = ''
    }


    if (checkName == true && checkAdderss == true && checkEmail == true && checkPhone == true){
        
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "OK",
        });
        const data = {
            name: name,
            address: address,
            email: email,
            phone: phone,
            toltals: get,
            status: "Delivered",
            dateTime: dateTime
        }
        const productsUrl = url + 'order'
        const option = {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetchApi(productsUrl, option)
        postOrderDetail(res.id)
        localStorage.removeItem('product')
        localStorage.removeItem('totalCost')
        localStorage.removeItem('cartNumbers')
        window.location = "http://127.0.0.1:5501/index.html"
    }

}

const postOrderDetail = async (idOder) => {
    let storage = JSON.parse(localStorage.getItem('product'))
    let orderDetails = []
    for (let i = 0; i < storage.length; i++) {
        const item = storage[i];
        let orderDetail = {
            order_id: idOder,
            product_id: item.id,
            quantity: item.quantity,
            unit_price: item.price
        }
        orderDetails.push(orderDetail)
    }
    let promises = orderDetails.map(item => {
        return postOrderDetailAsync(item)
    })
    await Promise.all(promises)
    localStorage.removeItem('product')
    localStorage.removeItem('cartNumbers')
    localStorage.removeItem('totalCost')
    storage = []

}


const postOrderDetailAsync = async (data) => {
    const productsUrl = url + 'orderDetail'
    const option = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    await fetchApi(productsUrl, option)
}



























// const add = async () => {
//     const data = {
//         name: name,
//         address: address,
//         email: email,
//         phone: phone,
//         toltals: get
//     }
//     const productsUrl = url
//     const option = {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     }
//     return await fetchApi(productsUrl, option)
// }