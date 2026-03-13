// Smooth scroll

document.querySelectorAll('.navbar a').forEach(link=>{

link.addEventListener('click',function(e){

e.preventDefault()

document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior:"smooth"
})

})

})


// Skill cards toggle

const cards = document.querySelectorAll(".skill-card")

cards.forEach(card => {

card.addEventListener("click", ()=>{

if(card.classList.contains("active")){
card.classList.remove("active")
}
else{

cards.forEach(c=>{
c.classList.remove("active")
})

card.classList.add("active")

}

})

})


// Back to top

const topBtn = document.getElementById("topBtn")

topBtn.onclick = () => {

window.scrollTo({
top:0,
behavior:"smooth"
})

}
function showEmail(){

const email = document.getElementById("emailText")

if(email.style.display === "none"){
email.style.display = "block"
}

}