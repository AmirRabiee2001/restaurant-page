import pepperoni from './assets/pepperoni.jpg'
import margh from './assets/margh.jpg'
import supreme from './assets/supreme.jpg'


function showMenu() {
    const contents = document.getElementById('content')
    
    
    contents.innerHTML = `
        <div class="container">
            <div class="menu-container">
                <div class="menu-card">
                    <div class="card-image">
                        <img src="${pepperoni}">
                    </div>
                    <div class="card-info">
                        <h1 class="card-title">Pepperoni</h1>
                        <h2>Price: 20$</h2>
                        <button class="order-btn">Order</button>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="card-image">
                        <img src="${pepperoni}">
                    </div>
                    <div class="card-info">
                        <h1 class="card-title">Margherita</h1>
                        <h2>Price: 20$</h2>
                        <button class="order-btn">Order</button>
                    </div>
                </div>
                <div class="menu-card">
                    <div class="card-image">
                        <img src="${supreme}">
                    </div>
                    <div class="card-info">
                        <h1 class="card-title">Supreme</h1>
                        <h2>Price: 20$</h2>
                        <button class="order-btn">Order</button>
                    </div>
                </div>
            </div>
        </div>
    `
    
}

export default showMenu 