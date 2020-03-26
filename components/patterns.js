module.exports = [
  {
    regex: /:([a-zA-Z0-9_\u4e00-\u9fa5]+):([a-zA-Z0-9_\u4e00-\u9fa5]+):/,
    modifier: (match, utils) => {
      const m1 = match[1].split(':').filter(Boolean).join(':')
      const m2 = match[2].split(':').filter(Boolean).join(':')
      return `<Term term="${m1}" show="${m2}"/>`
    }
  },
  {
    regex: /:([a-zA-Z0-9_\u4e00-\u9fa5]+):/,
    modifier: (match, utils) => {
      const m1 = match[1].split(':').filter(Boolean).join(':')
      return `<Term term="${m1}"/>`
    }
  }
]
