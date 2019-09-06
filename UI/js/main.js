function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="#68af5b";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="#68af5b";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }
 

 window.onload = function() {

	/* side Bar */
        document.getElementById('sidebar-btn')
        .addEventListener("click", function() {
          document.getElementById('sidebar')
          .classList.toggle('visible');
        });


    /* Top Bar */
	    document.getElementById("menu")
	     .addEventListener("click",openMenu); 
	        
     };



function openMenu(){
	document.getElementById("dropdown").classList.toggle("active");
}