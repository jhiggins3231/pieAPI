module.exports = (req, res, next) => {
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-method', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('access-control-allow-header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
    next();
}