(function(d){
	const $nav = d.querySelector('nav');
	const $btn = d.querySelector('.btn-menu');
  
	$btn.addEventListener('click', () => {
	  $nav.classList.toggle('show');
	});
  })(document);