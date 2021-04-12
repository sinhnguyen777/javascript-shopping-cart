const urlcate = "http://localhost:3000/categorys";

const fetchApi = async (urlcate, option) =>{
    const res = await fetch(urlcate, option)
    return res.json()
}

const getCategory = async () => {
    const productsUrl = urlcate
    const option = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    showProducts(res)
}

const showProducts = data => {
    data.forEach((index, item) => {
        document.querySelector("#listCategory").innerHTML += `
        <li class="befor-check">
            <div class="form-check pt-2 pb-2">
                <label class="form-check-label">
                    <a href="product.html?idcategory=${index.id}">${index.name} Care</a>
                </label>
            </div>
        </li>
        `;
    });
}

// const getProductByIdCategory = async (id) => {
//     const productsUrl = url + 'products/' + id
//     const option = {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//     }
//     return await fetchApi(productsUrl, option)
// }

getCategory()
