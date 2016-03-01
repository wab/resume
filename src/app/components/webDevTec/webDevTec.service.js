export class WebDevTecService {
  constructor () {
    'ngInject';

    this.data = [
      {
        'title': 'html',
        'url': '',
        'description': '',
        'logo': 'html.png',
        'class': 'front-end'
      },
      {
        'title': 'css',
        'url': '',
        'description': '',
        'logo': 'css.png',
        'class': 'front-end'
      },
      {
        'title': 'PHP',
        'url': '',
        'description': '',
        'logo': 'php.png',
        'class': 'back-end'
      },
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png',
        'class': 'front-end'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png',
        'class': 'tools'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png',
        'class': 'tools'
      },
      {
        'title': 'Bower',
        'url': 'http://bower.io',
        'description': '',
        'logo': 'bower.svg',
        'class': 'tools'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png',
        'class': 'tools'
      },
      {
        'title': 'Sass (Node)',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'node-sass.png',
        'class': 'front-end'
      },
      {
        'title': 'Git',
        'url': 'https://git-scm.com',
        'description': 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
        'logo': 'git.png',
        'class': 'tools'
      },
      {
        'title': 'WordPress',
        'url': 'https://wordpress.org',
        'description': '',
        'logo': 'wordpress.png',
        'class': 'back-end'
      },
      {
        'title': 'Less',
        'url': 'http://lesscss.org/',
        'description': '',
        'logo': 'less.png',
        'class': 'front-end'
      },
      {
        'title': 'jQuery',
        'url': 'https://jquery.com/',
        'description': '',
        'logo': 'jquery.png',
        'class': 'front-end'
      }
    ];
  }

  getTec() {
    return this.data;
  }
}
