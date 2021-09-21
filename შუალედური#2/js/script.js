let header=document.createElement('header')
header.classList.add('header')
document.getElementsByTagName('body')[0].appendChild(header)

let nav=document.createElement('nav')
nav.classList.add('nav')
document.getElementsByTagName('header')[0].appendChild(nav)

let ul=document.createElement('ul')
ul.classList.add('ul')
document.getElementsByTagName('nav')[0].appendChild(ul)

let img1=document.createElement('img')
img1.setAttribute('class','logo')
img1.setAttribute('src','img/logo.svg')
img1.setAttribute('alt','logo')
document.getElementsByTagName('ul')[0].appendChild(img1)

let li1=document.createElement('li')
li1.textContent=('home')
document.querySelectorAll('.ul')[0].appendChild(li1)

let li2=document.createElement('li')
li2.textContent=('shop')
document.getElementsByTagName('ul')[0].appendChild(li2)

let li3=document.createElement('li')
li3.textContent=('about')
document.getElementsByTagName('ul')[0].appendChild(li3)

let li4=document.createElement('li')
li4.textContent=('blog')
document.getElementsByTagName('ul')[0].appendChild(li4)

let li5=document.createElement('li')
li5.textContent=('contact us')
document.getElementsByTagName('ul')[0].appendChild(li5)


let section=document.createElement('section')
section.classList.add('section')
document.getElementsByTagName('body')[0].appendChild(section)

let div1=document.createElement('div')
div1.classList.add('wraper','wraper1')
document.querySelectorAll('.section')[0].appendChild(div1)

let div2=document.createElement('div')
div2.classList.add('left-box')
document.querySelectorAll('.wraper1')[0].appendChild(div2)

let img2=document.createElement('img')
img2.setAttribute('class','left-box-image')
img2.setAttribute('src','img/image.jpg')
img2.setAttribute('alt','logo')
document.querySelectorAll('.left-box')[0].appendChild(img2)


let div3=document.createElement('div')
div3.classList.add('right-box')
document.querySelectorAll('.wraper1')[0].appendChild(div3)

let p1=document.createElement('p')
p1.textContent="Max Product Name"
document.querySelectorAll('.right-box')[0].appendChild(p1)

let p2=document.createElement('p')
p1.textContent="$140"
document.querySelectorAll('.right-box')[0].appendChild(p2)

let add_cart=document.createElement('button')
add_cart.setAttribute('class','add_cart')
add_cart.setAttribute('id','add_cart')
add_cart.setAttribute('type','submit')
add_cart.textContent='ADD TO CART'
document.querySelectorAll('.right-box')[0].appendChild(add_cart)

let p3=document.createElement('p')
p3.setAttribute('class','description')
p3.textContent="Description"
document.querySelectorAll('.right-box')[0].appendChild(p3)

let p4=document.createElement('p')
p4.setAttribute('class','desc_text')
p4.textContent="A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the."
document.querySelectorAll('.right-box')[0].appendChild(p4)



document.getElementById('add_cart').addEventListener('click',function(){
    alert('item is added')
})