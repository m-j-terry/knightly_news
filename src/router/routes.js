import Home from '../pages/Home/Home';
import Administrator from '../pages/Administrator/Administrator';
import Article from '../pages/Article/Article';
import Category from '../pages/Category/Category';
import Contributor from '../pages/Contributor/Contributor';




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
		path: '/Article'
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
	}
];

export default routes;
