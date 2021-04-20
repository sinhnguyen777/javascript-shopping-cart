const url = 'http://localhost:3000/'

fetch(url + 'categorys')
.then(res => res.json())
.then(data => {
    data.forEach(category => {
        renderProducts(category)
    });
})

const listCategory = document.querySelector('#listCategory')
const addModelForm = document.querySelector('#form-add-product')
const editForm = document.querySelector('#editForm #form-edit-product')
let id = ''

const renderProducts = (category) => {
    const output = `
    <tr  data-id="${category.id}">
        <th scope="row"><input type="checkbox" name="acs" id=""></th>
        <th scope="row">${category.id}</th>
        <td scope="row">${category.name}</td>
        <td><button type="button" class=" btn-edit btn btn-primary"><i class="far fa-edit"></i></button></td>
        <td><button type="button" class="btn-delete btn btn-primary"><i class="far fa-trash-alt"></i></button></td>
    </tr>
    `

    listCategory.insertAdjacentHTML('beforeend', output)

    const btndelete = document.querySelector(`[data-id = '${category.id}']  .btn-delete`)

    btndelete.addEventListener('click', (e) => {
        fetch(url + 'categorys/' + `${category.id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(() => location.reload())
    })

    const edit = document.querySelector(`[data-id = '${category.id}'] .btn-edit`)
    edit.addEventListener('click', (e) => {
        e.preventDefault()
        id = category.id
        $('#editForm').modal('show'); 
        editForm.idCategory.value = category.id 
        editForm.name.value = category.name
    })
}

addModelForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var namecate = document.querySelector('#nameCate').value
    var pattenName = /^[a-zA-Z]{2,30}[a-zA-Z\ ]*$/igm
    var resultName = pattenName.test(namecate)
    if (resultName == false) {
        document.getElementById('nameAddHelp').innerText = 'Ten khong hop le'
    } else if(namecate.length > 30){
        document.getElementById('nameAddHelp').innerText = 'Ten khong duoc qua 30 ky tu'
    } else {
        document.getElementById('nameAddHelp').innerText = ''
    }
    
    if (resultName == true) {
        
        fetch(url + 'categorys',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: addModelForm.name.value
            })
        })
        .then(res => res.json())
        .then(data => {
            const dataArr = []
            dataArr.push(data)
            renderProducts(dataArr)
        })
        addModelForm.name.value = ''
    }

})

editForm.addEventListener('submit', (e) => {
    e.preventDefault()
    var namecate = document.querySelector('#nameCategory').value
    var pattenName = /^[a-zA-Z]{2,30}[a-zA-Z\ ]*$/igm
    var resultName = pattenName.test(namecate)
    if (resultName == false) {
        document.getElementById('nameEditHelp').innerText = 'Ten khong hop le'
    } else if(namecate.length > 30){
        document.getElementById('nameEditHelp').innerText = 'Ten khong duoc qua 30 ky tu'
    } else {
        document.getElementById('nameEditHelp').innerText = ''
    }
    
    if (resultName == true) {
        
        fetch(`${url}categorys/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editForm.name.value
            })
        })
        .then(res => res.json())
        .then(() => location.reload())
        editForm.name.value = ''
    }


})
