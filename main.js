let myForm = document.getElementById('my-form');
let sum = 0;
let sum_of = document.getElementById('sum-of');
sum_of.textContent = `Total sum of products:- ${sum}`
myForm.addEventListener('submit',Save_Product)

let ProductList = document.getElementById('ListOfItems');


function Save_Product(e){
    e.preventDefault();
    const Product = {
    };
    Product.amount = document.getElementById('price').value;
    Product.name = document.getElementById('product').value;
    saveProduct(Product);
}

async function saveProduct(Product){
    try{
        let result = await axios.post('http://localhost:7000/add-product',Product);
        sum += Number(Product.amount);
        Product.id = result.data.id;
        showProduct(Product);
    }
    catch(err){
        console.log(err);
    }
}

window.addEventListener("DOMContentLoaded",() =>{
    getAllProducts();
});

function showProduct(Product){
    let li = document.createElement('li');

    //delete-button
    let delBtn = document.createElement('button');
    delBtn.value = 'Delete Item';
    delBtn.className = 'btn btn-danger';
    delBtn.appendChild(document.createTextNode('Delete Item'));

    let productDetails = `${Product.name} purchased for ${Product.amount} Rs`;
    li.appendChild(document.createTextNode(productDetails));
    li.appendChild(delBtn);

    ProductList.appendChild(li);
    let id = Product.id;
    
    sum += Product.amount;
    delBtn.onclick = () => delProduct(id,li,Product);
    sum_of.textContent = `Total sum of products:- ${sum}`;
}

async function delProduct(id,li,Product){
    try{
        await axios.post(`http://localhost:7000/del-product/${id}`);
        sum -= Product.amount;
        sum_of.textContent = `Total sum of products:- ${sum}`
        ProductList.removeChild(li);
    }
    catch(err){
        console.log(err);
    }
}

async function getAllProducts(){
    try{
        let response = await axios.get('http://localhost:7000/products');
        response.data.forEach(entry => showProduct(entry));
    }
    catch(err){
        console.log(err);
    }
}