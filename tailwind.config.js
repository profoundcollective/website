module.exports = {
    content: [
      './_drafts/**/*.html',
      './_includes/**/*.html',
      './_layouts/**/*.html',
      './_posts/*.md',
      './_pages/*.html',
      './index.html',
    ],
    theme: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif']
      },
      extend: {
        fontDisplay: {
          'swap': 'swap',
        }
      },
      extend: {
        fontFamily: {
          'rowdie': ['Rowdies'],
          'josefin': ['Josefin Sans'],
          'roboto': ['Roboto'],
          'zilla': ['Zilla Slab'],
          'main': ['Verdana'],
        }
      },
    },
    plugins: []
  }