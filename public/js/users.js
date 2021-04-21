
const url = 'http://localhost:3000/'

const fetchApi = async (url, option) => {
    const res = await fetch(url, option)
    return res.json()
}

const login = async () =>{
    const productsUrl = url + 'users'
    const option = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
    }
    const res = await fetchApi(productsUrl, option)
    const email = document.querySelector('#exampleInputEmail1').value
    const password = document.querySelector('#exampleInputPassword1').value
    res.forEach(item => {
        if (email === item.email && password === item.password) {
            window.location = "http://127.0.0.1:5501/admin/index.html"
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Login failed',
                text: 'Wrong account or password',
                footer: '<a href>Why do I have this issue?</a>'
            })
        }
    });
    
}