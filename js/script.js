const navigation = document.querySelector('.js-nav');
const toggle = document.querySelector('.js-toggle');

toggle.onclick = function(){
  toggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

const navLinkHtml = document.querySelector('.js-link-html');
const navLinkJs = document.querySelector('.js-link-js');
const navLinkReact = document.querySelector('.js-link-react');

navLinkHtml.onclick = function(){
  toggle.classList.remove('active');
  navigation.classList.remove('active');
}
navLinkJs.onclick = function(){
  toggle.classList.remove('active');
  navigation.classList.remove('active');
}
navLinkReact.onclick = function(){
  toggle.classList.remove('active');
  navigation.classList.remove('active');
}