import express from 'express';
import handlebars from 'express-handlebars';

function setupExpress(app) {
    app.engine('hbs', handlebars({ extname: 'hbs' }));
    app.set('view engine', 'hbs');

    app.use(express.static('public'));

    app.use(express.urlencoded({ extended: true }));
}

export default setupExpress;