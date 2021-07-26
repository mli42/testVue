import Accueil from './components/Accueil/Accueil.vue'
import Demo from './components/Demo/Demo.vue'
import Weather from './components/Weather/Weather.vue'

interface route {
	path: string,
	component: unknown,
}

export default [
	{ path: '/', component: Accueil },
	{ path: '/demo', component: Demo },
	{ path: '/weather', component: Weather },
] as route[]
