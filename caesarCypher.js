
//Caesar cipher in node
var inquirer = require("inquirer");

inquirer.prompt([

{
	type:"input",
	name:"message",
	message:"Write the message you would like to encrypt:"
},

{
	type:"input",
	name: "key",
	message:"Enter a number between 0 and 25"
}



	]).then(function(encrypted) {

		var newMessage = '';

		if (encrypted.key < 0){
			console.log("cypher key is negative");
			reverseEncryption(encrypted);

		} else {

			console.log("cypher key is " + encrypted.key)
			
			for (var i = 0; i<encrypted.message.length; i++) {
				
				var newKey = encrypted.message[i];

				//if (newKey.match(/[a-z]/i)){
					var newCode = encrypted.message.charCodeAt(i);

					if ((newCode >= 65) && (newCode <= 90)) {
						newKey = String.fromCharCode(((newCode -65 + encrypted.key) % 26) + 65);
					} else if ((newCode >= 97) && (newCode <= 122)) {
						newKey = String.fromCharCode(((newCode - 97 + encrypted.key) % 26) + 97);
					}
				//}
				newMessage += newKey;
			}

			}

		console.log(newMessage);
	}).catch(function(err){

		console.log("error");
	});

	

	var reverseEncryption = function(encrypted) {

		var reverseMessage = "";
		console.log("reverseEncryption reached");
		//console.log(encrypted);

		for (var i = 0; i<encrypted.message.length; i++) {
			//console.log("in for loop=======")
				
				var reverseKey = encrypted.message[i];

				//console.log(reverseKey);

				//if (newKey.match(/[a-z]/i)){
					var reverseCode = encrypted.message.charCodeAt(i);
					//debugger;

					if ((reverseCode >= 65) && (reverseCode <= 90)) {
						reverseKey = String.fromCharCode(((reverseCode - 65 + (encrypted.key + 26 )) % 26) + 65);
						console.log(reverseKey);
						console.log(reverseCode);
						console.log(encrypted.key);
					} else if ((reverseCode >= 97) && (reverseCode <= 122)) {
						reverseKey = String.fromCharCode(((reverseCode - 97 + (encrypted.key + 26 )) % 26) + 97);
						console.log("reverserkey !!!!" + reverseKey);
						console.log("reverserCode !!!!" +reverseCode);
						console.log("encrypted.key !!!!" + encrypted.key);
					}
					//console.log(reverseKey);

			reverseMessage += reverseKey;


		
	}
console.log(reverseMessage);
};

