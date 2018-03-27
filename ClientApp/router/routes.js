import HomePage from '../modules/home/home-page'
import CounterExample from '../modules/counter/counter-example'
import FetchData from '../modules/fetchdata/fetch-data'
import vuetable2 from '../modules/vuetable2/vuetable2'

export const routes = [
  { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
  { name: 'counter', path: '/counter', component: CounterExample, display: 'Counter', icon: 'graduation-cap' },
  { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' },
  { name: 'vuetable2', path: '/vuetable2', component: vuetable2, display: 'vuetable2', icon: 'table' }
]
