var metalsmith = require('metalsmith');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'robinandersson.se',
      description: "Robin Andersson's personal web page."
    }
  })
  .source('./src')
  .destination('./public')
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('robinandersson.se built!');
    }
  });
