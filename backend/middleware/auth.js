const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = sessionStorage.getItem('userAuth');
        const decodedToken = jwt.verify(token, "TOKEN_SECRET");
        const userId = decodedToken.userId;
        req.auth = { userId };
        if (req.body.userId && req.body.userId !== userId) {
            throw "User ID non valable !";
        } else {
            next();
        }
    } catch (error) {
      res.status(403).json({ error: error | "Requête non authentifiée !" });
    }
};