export const validateAccessoryFormInputs = (req, res, next) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
    };
    if (req.body.name.trim().length < 3 || req.body.name.trim().length > 30) {
        return res.render('createAccessory', {
            data,
            title: 'Create Accessory',
            nameMessage: 'Name have to be between 3 and 30 characters!'
        });
    }
    if (req.body.description.trim().length < 5 || req.body.description.trim().length > 500) {
        return res.render('createAccessory', {
            data,
            title: 'Create Accessory',
            descriptionMessage: 'Description have to be between 5 and 500 characters!'
        });
    }
    if (!req.body.imageUrl.trim().startsWith('http')) {
        return res.render('createAccessory', {
            data,
            title: 'Create Accessory',
            imageMessage: 'Url have to start with http or https!'
        });
    }
    next();
};
