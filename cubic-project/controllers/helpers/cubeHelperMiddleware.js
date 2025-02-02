export const validateCubeFormInputs = (req, res, next) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        level: req.body.difficultyLevel
    };
    switch (data.level) {
        case '1': data.one = true; break;
        case '2': data.two = true; break;
        case '3': data.three = true; break;
        case '4': data.four = true; break;
        case '5': data.five = true; break;
        case '6': data.six = true; break;
    }
    if (req.body.name.trim().length < 3 || req.body.name.trim().length > 30) {
        return res.render('create', {
            data,
            title: 'Create Cube',
            nameMessage: 'Name have to be between 3 and 30 characters!'
        });
    }
    if (req.body.description.trim().length < 5 || req.body.description.trim().length > 500) {
        return res.render('create', {
            data,
            title: 'Create Cube',
            descriptionMessage: 'Description have to be between 5 and 500 characters!'
        });
    }
    if (!req.body.imageUrl.trim().startsWith('http')) {
        return res.render('create', {
            data,
            title: 'Create Cube',
            imageMessage: 'Url have to start with http or https!'
        });
    }
    if (req.body.difficultyLevel < 1 || req.body.difficultyLevel > 6) {
        return res.render('create', {
            data,
            title: 'Create Cube',
            difficultyMessage: 'Level have to be between 1 and 6!'
        });
    }
    next();
};
