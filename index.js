setInterval(()=>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let hrotate = 30 * hour + minute/2;
    let mrotate = 6*minute;
    let srotate = 6*second;
    document.querySelector("#hour").style.transform = `rotate(${hrotate}deg)`;
    document.querySelector("#minute").style.transform = `rotate(${mrotate}deg)`;
    document.querySelector("#second").style.transform = `rotate(${srotate}deg)`;
}, 1000)