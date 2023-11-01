import { Router } from './router.js'

const router = new Router();
router.add("/", "assets/pages/home.html");
router.add("/ouniverso", "assets/pages/ouniverso.html");
router.add("/exploracao", "assets/pages/exploracao.html");
router.add(404, "assets/pages/404.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();