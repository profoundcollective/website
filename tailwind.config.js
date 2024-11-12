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