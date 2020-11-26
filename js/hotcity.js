let shenzhen = document.querySelector('.shenzhen')
let beijing = document.querySelector('.beijing')
let shanghai = document.querySelector('.shanghai')
let tianjin = document.querySelector('.tianjin')
let guangzhou = document.querySelector('.guangzhou')
let fanhui = document.querySelector('.fanhui')
let box = document.querySelector('.box');
let btn = document.querySelector('.btn');
let hotcity = document.querySelector('.hotcity');
let city = document.querySelector('.city');
let firstul = document.querySelector('.firstul');
let return1 = document.querySelector('.return');
let spell = document.querySelector('.spell');
let CN = document.querySelector('.CN');
let number = document.querySelector('.number')

shenzhen.addEventListener('click', shenzhen1);
beijing.addEventListener('click', beijing1);
shanghai.addEventListener('click', shanghai1);
tianjin.addEventListener('click', tianjin1);
guangzhou.addEventListener('click', guangzhou1);
fanhui.addEventListener('click', fanhui1);
return1.addEventListener('click', return11);


function shenzhen1() {
  box.style.backgroundImage = "url('img/10.1-1/bg_sz.jpg')"
  btn.style.display = "none";
  hotcity.style.display = "none";
  city.style.display = "block";
  firstul.style.display = "none";
  spell.innerHTML = 'shenzhen';
  CN.innerHTML = '深圳';
  number.innerHTML = '87';
}

function beijing1() {
  box.style.backgroundImage = "url('img/10.1-1/bg_bj.jpg')"
  btn.style.display = "none";
  hotcity.style.display = "none";
  city.style.display = "block";
  firstul.style.display = "none";
  spell.innerHTML = 'beijing';
  CN.innerHTML = '北京';
  number.innerHTML = '79';
}

function shanghai1() {
  box.style.backgroundImage = "url('img/10.1-1/bg_sh.jpg')"
  btn.style.display = "none";
  hotcity.style.display = "none";
  city.style.display = "block";
  firstul.style.display = "none";
  spell.innerHTML = 'shanghai';
  CN.innerHTML = '上海';
  number.innerHTML = '77';
}

function tianjin1() {
  box.style.backgroundImage = "url('img/10.1-1/bg_tj.jpg')"
  btn.style.display = "none";
  hotcity.style.display = "none";
  city.style.display = "block";
  firstul.style.display = "none";
  spell.innerHTML = 'tianjin';
  CN.innerHTML = '天津';
  number.innerHTML = '77';
}

function guangzhou1() {
  box.style.backgroundImage = "url('img/10.1-1/bg_gz.jpg')"
  btn.style.display = "none";
  hotcity.style.display = "none";
  city.style.display = "block";
  firstul.style.display = "none";
  spell.innerHTML = 'guangzhou';
  CN.innerHTML = '广州';
  number.innerHTML = '75';
}

function fanhui1() {
  box.style.backgroundImage = "url('img/10.0/bg.jpg')"
  btn.style.display = "block";
}

function return11() {
  btn.style.display = "block";
  hotcity.style.display = "block";
  city.style.display = "none";
  firstul.style.display = "none";
  box.style.backgroundImage = "url('img/10.0/bg.jpg')"
}