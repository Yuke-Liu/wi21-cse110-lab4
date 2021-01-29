let d = new Date();
let timeID = setInterval(function(){let time = d.toLocaleDateString(); console.log(time);}, 1000);