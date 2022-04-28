const options = {

	method: 'GET',	headers: {

		Accept: 'application/json'

		

	}

};

fetch('https://icanhazdadjoke.com/', options)

	.then(response => response.json())

	.then(function(data){

    box = document.querySelector('#joke');

    box.innerText = String(data.joke);

    

    

    

  })

	.catch(err => console.error(err));

   
