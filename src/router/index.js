import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';

export const routes = [
    { path: '/:lang/', element: HomePage },
    { path: '/:lang/about', element: AboutPage },
    { path: '/:lang/contact', element: ContactPage },
];