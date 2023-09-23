import Home from '../pages/Home/Home';
import Administrator from '../pages/Administrator/Administrator';
import Article from '../pages/Article/Article';
import Category from '../pages/Category/Category';
import Contributor from '../pages/Contributor/Contributor';
import Press from '../pages/Press/Press'




const routes = [
	{
		Component: Administrator,
		key: 'Administrator',
		path: '/Admin'
	},
	{
		Component: Home,
		key: 'Home',
		path: '/'
	},
	{
		Component: Article,
		key: 'Article',
		path: '/Article/:id'
	},
	{
		Component: Category,
		key: 'Category',
		path: '/Category/:id'
	},
	{
		Component: Contributor,
		key: 'Contributor',
		path: '/Contributor/:id'
	},
	{ 
		Component: Press,
		key: 'Press',
		path: '/Press'
	}
];

export default routes;
