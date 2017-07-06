var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var handlebars = require('handlebars');
var collections = require('metalsmith-collections');

metalsmith(__dirname)
  .metadata({
    site: {
      name: 'robinandersson.se',
      description: "Robin Andersson's personal web page."
    }
  })
  .source('./src')
  .destination('./public')
  .use(markdown())
  .use(collections({
    articles: {
      pattern: 'posts/**/*.html',
      sortBy: 'date',
      reverse: true
    },
  }))
  .use(layouts({
    engine: 'handlebars',
    directory: './layouts',
    default: 'post.html',
    pattern: ["*/*/*html","*/*html","*html"]
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('robinandersson.se built!');
    }
  });
