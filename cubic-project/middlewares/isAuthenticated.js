export default (req, res, next) => {
    if (!req.user) return res.redirect('/auth/login');
    next();
}
