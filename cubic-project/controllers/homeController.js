import Router from 'express';
const router = Router();

router.get('/', (req, res) => res.redirect('/cubes'));

router.get('/about', (req, res) => res.render('about', { title: 'About Page' }));

export default router;