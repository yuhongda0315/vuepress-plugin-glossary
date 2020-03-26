/**
 * Accept a string and replace all references to linked terms with appropriate <a> tags 
 */
export function renderTermLinksToHTML (term, termList) {
  let value = termList[replaceUnderscoresWithSpaces(term)]

  value = value.replace(/:([a-zA-Z0-9_\u4e00-\u9fa5]+):([a-zA-Z0-9_\u4e00-\u9fa5]+):/g, (match, g1, g2) => {
    return getTermTag(termList[replaceUnderscoresWithSpaces(g1)], g2)
  })
  value = value.replace(/:([a-zA-Z0-9_\u4e00-\u9fa5]+):/g, (match, g1, g2) => {
    return getTermTag(termList[replaceUnderscoresWithSpaces(g1)], g1)
  })
  return value
  }

function getTermTag (definition, showText) {
    let termFound = true;
    if (definition === undefined) {
      definition = 'Term not found in the glossary'
      termFound = false
    } else {
      definition = removeTermLink(definition)
    }
    const classes = termFound ? '' : ' term-not-found'
    showText = replaceUnderscoresWithSpaces(showText)
    return `<a title="${definition}" class="term${classes}">${showText}</a>`
}

/**
 * Return only the displayed text from the term link definition
 * for example `:house:houses:` => `houses`
 */
export function removeTermLink (term) {
  return term.replace(/:[a-zA-Z0-9_\u4e00-\u9fa5]+:([a-zA-Z0-9_\u4e00-\u9fa5]+):/g, (match, g1) => g1)
  .replace(/:([a-zA-Z0-9_\u4e00-\u9fa5]+):/g, (match, g1) => g1)
}

function replaceUnderscoresWithSpaces (str) {
  return str.split('_').join(' ')
}
