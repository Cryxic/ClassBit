'use strict';

module.exports = function(app) {
    app.use('/', require('../routers/index'));
}