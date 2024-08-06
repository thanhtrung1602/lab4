class ProductController {
    index(req, res) {
        res.send('hello')
    }
}

module.exports = new ProductController