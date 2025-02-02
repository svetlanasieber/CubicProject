import Router from 'express';
import { validateAccessoryFormInputs as validator } from './helpers/accessoryHelperMiddleware.js';
import accessoryService from '../services/accessoryService.js';

const router = Router();

router.get('/create', (req, res) => res.render('createAccessory', { title: 'Create Accessory' }));
router.post('/create', validator, (req, res) => {
    accessoryService.create(req.body)
        .then(x => res.redirect('/cubes'))
        .catch(x => res.status(500).end());
    res.redirect('/cubes');
});

export default router;