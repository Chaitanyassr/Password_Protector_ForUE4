var objPeople = [
	{ // Object @ 0 index
		username: "chinuon",
		password: "chinuon"
	},
	{ // Object @ 1 index
		username: "chaitanya",
		password: "chaitanya"
	},
	{ // Object @ 2 index
		username: "chinu",
		password: "chinu"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
            console.log(username + " is logged in!!!")
            var LoginMessage = document.getElementById("login");
			LoginMessage.style.display = "block";
			var loginPage = document.getElementById("Block");
            loginPage.style.display = "none";
			// stop the function if this is found to be true
			return
		}
	}
    console.log("incorrect username or password")
    var IncorrectMessage = document.getElementById("incorrect");
    IncorrectMessage.style.display = "block";
}