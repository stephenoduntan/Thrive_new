const bodySize = window.innerWidth;
let textString = document.body;



if (bodySize < 1856){
	textString.style.display = 'none';
	window.alert('Page view is not available at this //screen resolution. Page is Best viewed at screen //resolution greater than 1856')
	

}else {
	textString.style.display = 'block';
}

