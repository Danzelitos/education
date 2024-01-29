// function api(){
// 	const div = document.querySelector('.container');
// 	fetch('https://jsonplaceholder.typicode.com/posts')
// 	.then((response) => {return response.json()} )
// 	.then((data) => 
	
// 	// console.log(data[0])
// 		data.forEach(element => {
// 			const diver = document.createElement('div')
// 			diver.className = 'diver'
// 			// console.log(`Title:${element.title} <br> Body:${element.body}`);
// 		// div.innerHTML = `${element.title} <br> ${element.body}`
// 		diver.innerHTML = `<h2>Заголовок: ${element.title}</h2> <br> <p>Статья: ${element.body}</p>`
// 		div.append(diver);

// 	})
	
// 	)
// 	.catch(err => console.log(err+ 'error'))
// }
// api();
// kY7k7S1zL2grzKgHDQvkjw==nqJ2kPMdMD77REm0



fetch('https://api.api-ninjas.com/v1/weather?city=Moscow',{
	method: 'GET',
	headers: {
		"X-Api-Key": 'kY7k7S1zL2grzKgHDQvkjw==nqJ2kPMdMD77REm0'
	}
})
	.then((response)=> {return response.json()})
	.then((data)=> {console.log(`${data.max_temp} / ${data.min_temp}` )
	const temp = document.querySelector('.temp');
	temp.innerHTML = `Max: ${data.max_temp} / Min: ${data.min_temp}`})
	.catch((err) => {console.log(err+ " error");})


