'use strict';

module.exports = function(app) {
    app.use('/', require('../app/routers/index'));
    app.use('/product', require('../app/routers/product'));
}