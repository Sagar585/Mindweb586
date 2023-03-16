let left = document.getElementById("left")
let centre = document.getElementById("centre")
let right = document.getElementById("right")
let song = document.getElementById("audio")
let btn = document.getElementById("play_btn")
let playbtn = document.getElementById("playbutton")
let resetbtn = document.getElementById("resetbutton")
// const imgobj =list[0]



playbtn.addEventListener('click',()=>{
    song.play()
    let i=0
    setInterval(() => {
        imgobj = list[i]
        left.innerHTML = `<img src=${imgobj[0]} />`
        right.innerHTML=    `<img src=${imgobj[0]} />`
        centre.innerHTML=   `<img src=${imgobj[1]} />`
        i++
    }, 2350);
    
})

resetbtn.addEventListener('click',()=>{
    song.pause()
    let i=0
    imgobj = list[i]
    left.innerHTML = `<img src=${imgobj[0]} />`
    right.innerHTML=    `<img src=${imgobj[0]} />`
    centre.innerHTML=   `<img src=${imgobj[1]} />`
})


