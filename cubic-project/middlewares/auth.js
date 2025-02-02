import config from '../config/index.js';
import jwt from 'jsonwebtoken';

const COOKIE_NAME = config.COOKIE_NAME;
const SECRET = config.SECRET;

export default function () {
    return (req, res, next) => {
        const token = req.cookies[COOKIE_NAME];
        if (token) {
            jwt.verify(token, SECRET, (e, x) => {
                if (e) res.clearCookie(COOKIE_NAME);
                else {
                    req.user = x;
                    res.locals.user = x;
                    res.locals.isAuthenticated = true;
                }
            })
        }
        next();
    }
}