const ghpages = require('gh-pages');

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://github.com/javib51/portfolio.git',
    dest: 'docs',
  },
  () => {
    // console.log('Deploy Complete!');
  },
);
