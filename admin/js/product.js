// fetch(url + 'products')
// .then(res => res.json())
// .then(data => {
//     data.forEach(product => {
//         renderProducts(product)
//     });
// })

// const listProduct = document.querySelector('#listProduct')

// const renderProducts = (product) => {
//     const output = `
    // <tr data-id="${product.id}">
    //     <th scope="row"><input type="checkbox" name="acs" id=""></th>
    //     <th scope="row">${product.id}</th>
    //     <td scope="row">${product.name}</td>
    //     <td scope="row">£${product.price}.00</td>
    //     <td scope="row">£${product.price_sale}.00</td>
    //     <td><img src="../../public/images/${product.img}" alt="" width="50px"></td>
    //     <td><a type="button" class="btn-edit btn btn-primary text-light"><i class="far fa-edit"></i></i></a></td>
    //     <td><a type="button" class="btn-delete btn btn-primary text-light"><i class="far fa-trash-alt"></i></a></td>
    // </tr>
//     `

//     listProduct.insertAdjacentHTML('beforeend', output)

//     const btndelete = document.querySelector(`[data-id = '${product.id}']  .btn-delete`)

//     btndelete.addEventListener('click', (e) => {
//         fetch(url + 'products/' + `${product.id}`, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         // .then(() => location.reload())
//     })
// }

// const addModelForm = document.querySelector('#form-add-product')

// addModelForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     fetch(url + 'products', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: addModelForm.name.value,
//             price: addModelForm.price.value,
//             image: addModelForm.image.file
//         })
//     })
//     .then(res => res.json())
//     .then(data => {
//         const dataArr = []
//         dataArr.push(data)
//         renderProducts(dataArr)
//     })
//     addModelForm.name.value = '',
//     addModelForm.price.value = '',
//     addModelForm.image.file = ''
// })


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
                <button type="button" onclick="getEdit(${index.id})" class="btn-edit btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal">
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

const addProduct = async () => {
    let urlImg = document.getElementById('image').value
    const data = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        price_sale: document.getElementById('price_sale').value,
        img: urlImg.substr(12),
        id_caegory: document.querySelector('#listCategory').value
    }
    console.log(data.img);
    const productsUrl = url + 'products'
    const option = {
        method: 'POST', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetchApi(productsUrl, option)
    console.log(urlImg);
    showAddedProduct(res)
    clearForm()
}

const showAddedProduct = product => {
    let pro = document.getElementById('listProduct')
    pro.innerHTML = ''
    product.forEach((index, item) => {
        console.log(index);;
        pro.innerHTML += `
        <tr data-id="${index.id}">
            <th scope="row"><input type="checkbox" name="acs" id=""></th>
            <th scope="row">${index.id}</th>
            <td scope="row">${index.name}</td>
            <td scope="row">£${index.price}.00</td>
            <td scope="row">£${index.price_sale}.00</td>
            <td><img src="${index.img}" alt="" width="50px"></td>
            
            <td>
                <button type="button" onclick="getEdit(${index.id})" class="btn-edit btn btn-primary text-light" data-toggle="modal" data-target="#exampleModal">
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


const editProduct = async (id) => {
    let urlImg = document.getElementById('image').value

    const data = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        price_sale: document.getElementById('price_sale').value,
        img: urlImg.substr(12),
        id_caegory: document.querySelector('#listCategory').value
    }
    const productsUrl = url + 'products/' + id
    const option = {
        method: 'PUT', 
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const res = await fetchApi(productsUrl, option)
    getProducts()
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
    getProducts()
}

const submitForm = async () => {
    let id = document.getElementById('id').value
    if (id == 0) {
        await addProduct()
    } else {
        await editProduct(id)
    }

    let nameProduct = document.getElementById('name').value
    let priceProduct = document.getElementById('price').value
    let price_saleProduct = document.getElementById('price_sale').value
    let imgProduct = document.getElementById('image').value
    let listCategory = document.getElementById('listCategory').value

    if(nameProduct == '' && priceProduct == '' && price_saleProduct == '' && imgProduct == '' && listCategory == ''){
        console.log('err');
    }

}

const getEdit = async (id) => {
    const product = await getProductById(id)
    document.getElementById('name').value = product.name
    document.getElementById('price').value = product.price
    document.getElementById('price_sale').value = product.price_sale
    document.getElementById('image').value = product.img
    document.getElementById('listCategory').value = product.id_caegory
    document.getElementById('id').value = product.id
}

const clearForm = () => {
    document.getElementById('name').value = ''
    document.getElementById('price').value = ''
    document.getElementById('price_sale').value = ''
    document.getElementById('image').value = ''
    document.getElementById('listCategory').value = ''
    document.getElementById('id').value = 0
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
    let cate = document.getElementById('listCategory')
    cate.innerHTML = ''
    for (let index = 0; index < data.length; index++) {
        const category = data[index];
        cate.innerHTML += `
        <option class="" value="${category.id}">${category.id} - ${category.name}</option>
        `
    }
}

getProduct()
getCategory()