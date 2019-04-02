Facebook Login Module Documentation:

Script file should be after <body> tag: <body><script type="text/javascript" src="FBscript.js"></script></body>
Be sure you are running on https. Usually you have to manually write https:// in front of localhost: https://localhost:63342/
There are 3 methods of initiating a facebook login:
1. In case you want to create your own button to initiate the login you have put the onclick action Login(): <button onclick="Login();">Login</button>
There is also a Logout() function which will log you out and try to make use of checkLoginState() to make sure you are connected so you can proceed to other pages or to enable the logout button and disable the login button.
2. Using the facebook login button which is styled by them. Just use this div in the body tag: <div class="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="true" ></div>
It also features the logout function
3. Using another facebook login button, which always checks if you are logged in: <fb:login-button scope="public_profile,email" onlogin="checkLoginState();"></fb:login-button>