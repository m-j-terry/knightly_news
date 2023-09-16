module.exports = function(req, res, next) {
    // Status code of 401 is Unauthorized
    // if (!req.admin) return res.status(401).json('Unauthorized');
    // A okay
    next();
};