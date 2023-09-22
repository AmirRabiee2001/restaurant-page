// Imports
import './styles/main.css'
import logo from './assets/logo.png'
import background from './assets/background.jpg'
import showHome from './home-page'
import showMenu from './menu-page'
import showContact from './contact-page'

// Pizza Logo 
const logoContainer = document.getElementById('logo')
logoContainer.src = logo

// background image
document.body.style.background = `url(${background})`

// Get Nav items
const navItems = document.querySelectorAll('.nav')

// Show home page first time
showHome()

// nav effect 
navItems.forEach((item) =>{
    item.addEventListener('click', (e)=>{
        if(e.target.classList.contains('nav')){
            navItems.forEach((navItem) =>{
                navItem.classList.remove('active')
            })
            
                e.target.classList.add('active')
                switch (e.target.id) {
                    case 'home':
                        showHome()
                        break;
                    case 'menu':
                        showMenu()  
                        break;
                    case 'contact':
                        showContact()
                        break;
                }
        }
    })
})
