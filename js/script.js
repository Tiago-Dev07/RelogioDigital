const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');
const data = document.querySelector('.datas');

setInterval(function time() {
    let dataToday = new Date();
    let hr = dataToday.getHours();
    let min = dataToday.getMinutes();
    let seg = dataToday.getSeconds();
    let dat = dataToday.toLocaleString('ao', { dateStyle: "short" });

    if(hr < 10){hr = '0' + hr;} if (min < 10){min = '0' + min;} if (seg < 10) {
        
        seg = '0' + seg;
        
    }

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    data.textContent = dat;
});
