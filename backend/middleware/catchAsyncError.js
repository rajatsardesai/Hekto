module.exports = tryErrors => (req, res, next) => {
    Promise.resolve(tryErrors(req, res, next)).catch(next);
}