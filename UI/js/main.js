/* eslint-disable linebreak-style */
function Signup() {
  document.getElementById('login').style.backgroundColor = '#fff';
  document.getElementById('login').style.color = '#1E1F26';
  document.getElementById('signup').style.backgroundColor = '#ebebeb';
  document.getElementById('signup').style.color = '#1E1F26';
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}
 
function Login() {
  document.getElementById('login').style.backgroundColor = '#ebebeb';
  document.getElementById('login').style.color = '#1E1F26';
  document.getElementById('signup').style.backgroundColor = '#fff';
  document.getElementById('signup').style.color = '#1E1F26';
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}
 

window.onload = function() {
  /* side Bar */
  document.getElementById('sidebar-btn')
    .addEventListener('click', function() {
      document.getElementById('sidebar')
        .classList.toggle('visible');
    });
  /* Top Bar */
	    document.getElementById('menu')
	     .addEventListener('click',openMenu);
};

function openMenu() {
  document.getElementById('dropdown').classList.toggle('active');
}
