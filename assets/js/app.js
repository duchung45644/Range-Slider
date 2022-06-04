var slider = document.querySelector('.slider');
var body = document.querySelector('body');
var main = document.querySelector('.main')

function setSlider(percent){
    slider.style.width = `${percent}%`;
    slider.querySelector('p').innerText = percent + '%';
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}

main.addEventListener('mousemove', function(e){
    let progress = e.pageX - this.offsetLeft;
    let percent = (progress / this.offsetWidth) * 100
    percent = Math.round(percent)

    setSlider(percent)
})
