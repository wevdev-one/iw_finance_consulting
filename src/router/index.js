import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import TermsPage from '../pages/TermsPage';
import PolicyPage from '../pages/PolicyPage';
import CookiePage from '../pages/CookiePage';

export const routes = [
    { path: '/:lang/', element: HomePage },
    { path: '/:lang/about', element: AboutPage },
    { path: '/:lang/contact', element: ContactPage },
    { path: '/:lang/terms', element: TermsPage },
    { path: '/:lang/policy', element: PolicyPage },
    { path: '/:lang/cookie', element: CookiePage },
];