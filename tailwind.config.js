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
        'josefin': ['Josefin Sans', 'sans-serif'],
        'main': ['Verdana']
      },
      extend: {
        fontDisplay: {
          'swap': 'swap'
        },
        typography: {
          DEFAULT: {
            css: {
              color: '#E5E7EB', // gray-200
              blockquote: {
                borderLeftColor: '#10B981', // green-500
                color: '#D1D5DB', // gray-300
                fontStyle: 'normal',
                fontSize: '1.5rem',
                quotes: 'none',
                marginTop: '2rem',
                marginBottom: '2rem'
              },
              'blockquote p:first-of-type::before': {
                content: 'none'
              },
              'blockquote p:last-of-type::after': {
                content: 'none'
              },
              p: {
                fontSize: '1.5rem',
                lineHeight: '1.75'
              },
              li: {
                fontSize: '1.5rem',
                lineHeight: '1.75'
              }
            }
          }
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography')
    ]
  }