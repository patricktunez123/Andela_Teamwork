/* eslint-disable linebreak-style */
function Signup() {
  document.getElementById('login').style.backgroundColor = '#fff';
  document.getElementById('login').style.color = '#1E1F26';
  document.getElementById('signup').style.backgroundColor = '#7FDBFF';
  document.getElementById('signup').style.color = '#fff';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}
 
function Login() {
  document.getElementById('login').style.backgroundColor = '#7FDBFF';
  document.getElementById('login').style.color = '#fff';
  document.getElementById('signup').style.backgroundColor = '#fff';
  document.getElementById('signup').style.color = '#1E1F26';
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}
 

window.onload = function() {
  document.getElementById('sideMenus-btn')
    .addEventListener('click', function() {
      document.getElementById('sideMenus')
        .classList.toggle('visible');
    });
	    document.getElementById('menu')
	     .addEventListener('click',openMenu);
};

function openMenu() {
  document.getElementById('dropdown').classList.toggle('active');
}
