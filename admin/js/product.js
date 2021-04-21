const url = 'http://localhost:3000/'
const fetchApi = async (url, option) =>{
    const res = await fetch(url, option)
    return res.json()
}

const getProduct = async () => {
    const productsUrl = url + 'products'
    const option = {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    showProducts(res)   
    // searchInput(res)
}

const getProductById = async (id) => {
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
        },
    }
    return await fetchApi(productsUrl, option)
}

const showProducts = data => {
    let pro = document.getElementById('listProduct')
    pro.innerHTML = ''
    data.forEach((index, item) => {
        pro.innerHTML += `
        <tr data-id="${index.id}">
            <th scope="row"><input type="checkbox" name="acs" id=""></th>
            <th scope="row">${index.id}</th>
            <td scope="row">${index.name}</td>
            <td scope="row">£${index.price}.00</td>
            <td scope="row">£${index.price_sale}.00</td>
            <td><img src="../../public/images/${index.img}" alt="" width="50px"></td>
            <td>
                <button type="button" onclick="getEdit(${index.id})" class="btn-edit btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal2">
                    <i class="far fa-edit"></i>
                </button>
            </td>
            <td>
                <button type="button" onclick="removeProduct(${index.id})" class="btn-delete btn btn-primary text-light" >
                    <i class="far fa-trash-alt"></i>
                </button>
            </td>
        </tr>`
    });
}

const submitAdd = async () => {
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const price_sale = document.getElementById('price_sale').value
    const id_caegory = document.getElementById('listCategory').value
    let urlImg = document.getElementById('image').value

    //check name
    var pattenName = /^[a-zA-Z]{2,30}[a-zA-Z\ ]*$/igm
    var resultName = pattenName.test(name)
    if (resultName == false) {
        document.getElementById('nameHelp').innerText = 'Ten khong hop le'
    } else if(name.length > 30){
        document.getElementById('nameHelp').innerText = 'Ten khong duoc qua 30 ky tu'
    } else {
        document.getElementById('nameHelp').innerText = ''
    }

    // check price
    var pattenPrice = /^[1-9][0-9]{1,3}$/igm
    var resulPrice = pattenPrice.test(price)
    if (resulPrice == false) {
        document.getElementById('priceHelp').innerText = 'khong hop le'
    } else {
        document.getElementById('priceHelp').innerText = ''
    }

    // check price_sale
    var pattenPriceSale = /^[1-9][0-9]{1,3}$/igm
    var resulPriceSale = pattenPriceSale.test(price)
    if (resulPriceSale == false) {
        document.getElementById('priceSaleHelp').innerText = 'khong hop le'
    } else if (price > price_sale){
        document.getElementById('priceSaleHelp').innerText = 'Khong duoc nho hon gia that'
    } else {
        document.getElementById('priceSaleHelp').innerText = ''
    }

    // check value image
    if (urlImg == "") {
        var resultImg = false
        document.getElementById('imgHelp').innerText = 'yeu cau phai co hinh anh'
    } else {
        resultImg = true
        document.getElementById('imgHelp').innerText = ''
    }

    if (resultName == true && resulPrice == true && resulPriceSale == true && resultImg == true) {
        
        const data = {
            name: name,
            price: price,
            price_sale: price_sale,
            img: urlImg.substr(12),
            id_catalog: id_caegory
        }
        console.log(data);
        const productsUrl = url + 'products'
        const option = {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetchApi(productsUrl, option)
        getProduct()
    }
}


const getEdit = async (id) => {
    const product = await getProductById(id)
    document.getElementById('idEdit').value = product.id
    document.getElementById('nameEdit').value = product.name
    document.getElementById('priceEdit').value = product.price
    document.getElementById('priceSaleEdit').value = product.price_sale
    document.getElementById('listCategoryEdit').value = product.id_catalog
}

const submitEdit = async () => {
    let id = document.getElementById('idEdit').value
    editProduct(id)
}

const editProduct = async (id) => {
    const name = document.getElementById('nameEdit').value
    const price = document.getElementById('priceEdit').value
    const price_sale = document.getElementById('priceSaleEdit').value
    let urlImg = document.getElementById('imageEdit').value
    const id_catalog = document.getElementById('listCategoryEdit').value

    //check name
    var pattenName = /^[a-zA-Z]{2,30}[a-zA-Z\ ]*$/igm
    var resultName = pattenName.test(name)
    if (resultName == false) {
        document.getElementById('nameEditHelp').innerText = 'Ten khong hop le'
    } else if(name.length > 30){
        document.getElementById('nameEditHelp').innerText = 'Ten khong duoc qua 30 ky tu'
    } else {
        document.getElementById('nameEditHelp').innerText = ''
    }

    // check price
    var pattenPrice = /^[1-9][0-9]{1,3}$/igm
    var resulPrice = pattenPrice.test(price)
    if (resulPrice == false) {
        document.getElementById('priceEditHelp').innerText = 'khong hop le'
    } else {
        document.getElementById('priceEditHelp').innerText = ''
    }

    // check price_sale
    var pattenPriceSale = /^[1-9][0-9]{1,3}$/igm
    var resulPriceSale = pattenPriceSale.test(price)
    if (resulPriceSale == false) {
        document.getElementById('priceSaleEditHelp').innerText = 'khong hop le'
    } else if (price > price_sale){
        document.getElementById('priceSaleEditHelp').innerText = 'Khong duoc nho hon gia that'
    } else {
        document.getElementById('priceSaleEditHelp').innerText = ''
    }

    // check value image
    if (urlImg == "") {
        var resultImg = false
        document.getElementById('imgEditHelp').innerText = 'yeu cau phai co hinh anh'
    } else {
        resultImg = true
        document.getElementById('imgEditHelp').innerText = ''
    }

    if (resultName == true && resulPrice == true && resulPriceSale == true && resultImg == true) {
        const data = {
            name: name,
            price: price,
            price_sale: price_sale,
            img: urlImg.substr(12),
            id_catalog: id_catalog
        }
        console.log(data);
        const productsUrl = url + 'products/' + id
        console.log(productsUrl);
        const option = {
            method: 'PUT', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const res = await fetchApi(productsUrl, option)
        getProduct()
    }
}

const removeProduct = async (id) => {
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'DELETE', 
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    getProduct()
    getCategory()
}




const getCategory = async () => {
    const productsUrl = url + 'categorys'
    const option = {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    showCategory(res)
}

const showCategory = data => {
    let cate = document.querySelector('#listCategory')
    cate.innerHTML = ''
    for (let index = 0; index < data.length; index++) {
        const category = data[index];
        cate.innerHTML += `
        <option class="" value="${category.id}">${category.id} - ${category.name}</option>
        `
    }

    //edit

    let cata = document.querySelector('#listCategoryEdit')
    cata.innerHTML = ''
    data.forEach(item => {
        // var cateNumber = Number(item.id)
        cata.innerHTML += `
            <option class="" value="${item.id}">${item.id} - ${item.name}</option>
        `
    })
}

getProduct()
getCategory()

// function searchInput(){
//     let data = [
//         {
//             "id": 1,
//             "name": "Cosmetic Branding Cream",
//             "img": "sp2.png",
//             "price": 30,
//             "price_sale": 35,
//             "id_catalog": 1,
//             "quantity": 1
//           },
//           {
//             "id": 2,
//             "name": "Liquid Container Green",
//             "img": "sp3.png",
//             "price": 10,
//             "price_sale": 12,
//             "id_catalog": 2,
//             "quantity": 1
//           },
//           {
//             "id": 3,
//             "name": "Ellie Bath Salt",
//             "img": "sp4.png",
//             "price": 10,
//             "price_sale": 5,
//             "id_catalog": 2,
//             "quantity": 1
//           }
//     ]
//     let el = document.getElementById('searchInput').value
//     let kq = data.filter(item => 
//         item.name.toLowerCase().includes(el.toLowerCase()))
//     console.log(kq);
// }

// searchInput()