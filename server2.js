app.get('/user', (req, res, next) => {
    res.send({ "message :": "user api called" })
});