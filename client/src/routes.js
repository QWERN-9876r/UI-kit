import Home from './Pages/home/page.svelte'
import CreateComponent from './Pages/createComponent/page.svelte'
import NotFound from './Pages/notFound/page.svelte'

export const routes = {
    '/': Home,
    '/create':  CreateComponent,


    '*': NotFound
}