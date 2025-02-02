import { Router } from 'express';
import authService from '../services/authService.js';
import config from '../config/index.js';
import isGuest from '../middlewares/isGuest.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = Router();
const COOKIE_NAME = config.COOKIE_NAME;

router.get('/login', isGuest, (req, res) => {
    res.render('login', { title: 'Login Page' });
});
router.post('/login',isGuest , (req, res) => {
    const { username, password } = req.body;

    authService.login({ username, password })
        .then(x => { res.cookie(COOKIE_NAME, x); res.redirect('/cubes') })
        .catch(x => res.render('login', { title: 'Login Page', error: x.message }));
})

router.get('/register', isGuest, (req, res) => {
    res.render('register', { title: 'Register Page' });
});
router.post('/register', isGuest, (req, res) => {
    const { username, password, repeatPassword } = req.body;
    if (password !== repeatPassword)
        return res.render('register', { title: 'Register Page', error: 'Password missmatch!' });
       
    authService.register({ username, password })
        .then(x => res.render('login', { title: 'Login Page', user: x.username }))
        .catch(x => res.render('register', { title: 'Register Page', error: x.message }));
})

router.get('/logout', isAuthenticated, (req, res) => {
    res.clearCookie(COOKIE_NAME);
    res.redirect('/cubes');
})

export default router;