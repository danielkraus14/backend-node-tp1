
const fibonacciMiddleware = (req, res, next) => {
    const number = req.body.number ?? 20;
    const fibonacci = [0, 1];
    for (let i = 2; i <= number; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    req.fibonacci = fibonacci;
    next();
};

export default fibonacciMiddleware;