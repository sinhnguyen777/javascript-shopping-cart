const urlcate = "http://localhost:3000/categorys";

async function getAPI(){
    const response= await fetch(urlcate)
    const arr = await response.json();
    arr.forEach((index, item) => {
        document.querySelector("#listCategory").innerHTML += `
        <li class="befor-check">
            <div class="form-check pt-2 pb-2">
                <label class="form-check-label">
                    <a href="">${index.name} Care</a>
                </label>
            </div>
        </li>
        `;
    });
        
}

getAPI()