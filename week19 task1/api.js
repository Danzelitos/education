function api(){
	const div = document.querySelector('.container');
	fetch('https://jsonplaceholder.typicode.com/posts')
	.then((response) => {return response.json()} )
	.then((data) => 
	
	// console.log(data[0])
		data.forEach(element => {
			const diver = document.createElement('div')
			diver.className = 'diver'
		diver.innerHTML = `<h2>Заголовок: ${element.title}</h2> <br> <article>Статья: ${element.body}</article>`
		div.append(diver);
	})
	
	)
	.catch(err => console.log(err+ 'error'))
}
api();





