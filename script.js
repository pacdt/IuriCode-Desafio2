function createCard(shoe){
    return `
    <div class="card">
    <img src="./assets/${shoe}.svg" alt="${shoe}">
    </div>
    `
}
document.getElementById('shoes').innerHTML = 
createCard('jordan1') + 
createCard('jordan2') +
createCard('jordan3') +
createCard('jordan4') +
createCard('jordan5') +
createCard('jordan6') +
createCard('jordan7') +
createCard('jordan8') 



function themeSelectorDark (){
    document.body.classList.remove("light")
    document.body.classList.toggle("dark")
}
function themeSelectorLight (){
    document.body.classList.remove("dark")
    document.body.classList.toggle("light")
}