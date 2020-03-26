# Glossary plugin for Vuepress

## The purpose

It is essential to adhere to a ubiquitous language when working in a team. A project usually has a set of clearly defined terms which all team members are expected to understand. To make this vocabulary easier to pick up, this glossary plugin lets you to create one central glossary and reference the terms from all other places within the project.

## Installation

1. install to plugin:

```
yarn add vuepress-plugin-glossary
```

2. Add it to Vuepress plugins

```js
//.vuepress/config.js
module.exports = {
  plugins: [
    'vuepress-plugin-glossary'
  ]
}
```

## Creating the glossary

In the project root directory add `GLOSSARY.md` with the following content:

```html
---
terms:
    person: "a human being"
    dog: "a friend of :person:"
    house: "a facility where :person:people: and :dog:dogs: can live in"
---

# Glossary

<Glossary :terms="$frontmatter.terms" />
```

Add your terms to the YAML frontmatter into the `terms` namespace (as the terms 'person', 'dog', and 'house' in the example).

If your definition contains colons (and you are being greeted with a `YAMLException`), wrap your definition in quotation-marks.

The `<Glossary />` tag will take care of displaying the glossary as HTML definition list.

## Referencing the terms in Markdown

To use the term in a sentence in whatever file, simply wrap it with colons like this:

```
 The :dog: is interested in fine arts, philosophy, and morality.
```

Hover over the green term and its definition will appear as the HTML `title` attribute. If the term contains spaces, replace them with underscores. So `age of enlightenment` becomes `age_of_enlightenment`.

However, sometimes the form of the word that you need to use in the sentence is not equivalent with its form in the glossary, for instance if you need to use it in plural. For this purpose make use of the following syntax: `:the_term:text_to_display:`, for example

```
The :dog:dogs: and :person:people: are more and more aware of environmental issues.
```

If the term is not found in the glossary, it will turn red.
