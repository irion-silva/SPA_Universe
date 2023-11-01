export class Router {

	routes = {}

	add(routeName, page) {
		this.routes[routeName] = page;
	}

	route(event) {
		event = event || window.event
		event.preventDefault();
		const targetRoute = event.target.closest('a').getAttribute('href');
	  
		if (targetRoute === "/") {
		  window.history.pushState({}, "", targetRoute);
		} else {
		  window.location.href = targetRoute;
		}

		this.handle()
	}

	handle() {
		const { pathname } = window.location;
		const route = this.routes[pathname] || this.routes[404];
		fetch(route)
			.then(data => data.text())
			.then(html => {
				document.querySelector('#app').innerHTML = html

				const bodyElement = document.querySelector('.background-container');
				const linkHome = document.querySelector('.link-home');
				const linkOUniverso= document.querySelector('.link-ouniverso');
				const linkExploracao = document.querySelector('.link-exploracao');

				bodyElement.classList.remove('home', 'ouniverso', 'exploracao');
				linkHome.classList.remove('active');
				linkOUniverso.classList.remove('active');
				linkExploracao.classList.remove('active');

				if (this.routes[pathname] === 'assets/pages/home.html') {
					bodyElement.classList.add('home');
					linkHome.classList.add('active');

				} else if (this.routes[pathname] === 'assets/pages/ouniverso.html') {
					bodyElement.classList.add('ouniverso');
					linkOUniverso.classList.add('active');
				} else if (this.routes[pathname] === 'assets/pages/exploracao.html') {
					bodyElement.classList.add('exploracao');
					linkExploracao.classList.add('active');
				}				
			}
			)
	}
}