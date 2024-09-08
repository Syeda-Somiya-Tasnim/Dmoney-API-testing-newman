const newman = require('newman');
require('dotenv').config();
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/33669534-b8a85c56-6762-428a-9ecc-8c546f541712?access_key=${process.env.secretKey}`,
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});