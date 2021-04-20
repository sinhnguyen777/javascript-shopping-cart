const url = 'http://localhost:3000/'
const fetchApi = async (url, option) =>{
    const res = await fetch(url, option)
    return res.json()
}

const getOrder = async () => {
    const productsUrl = url + 'order'
    const option = {
        method: 'GET', 
        headers: {
        'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    showOrder(res)
}

const showOrder = data => {
    let list = document.getElementById('listOrder')
    list.innerHTML = ''
    data.forEach((index, item) => {
        list.innerHTML += `
        <tr>
            <td><a href="#">${index.id}</a></td>
            <td>${index.name}</td>
            <td>${index.address}</td>
            <td>${index.email}</td>
            <td><span class="badge badge-success">${index.status}</span></td>
            <td><a href="#" class="btn btn-sm btn-primary">Detail</a></td>
        </tr>
        `
    });
}

getOrder()