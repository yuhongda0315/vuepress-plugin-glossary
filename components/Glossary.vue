<template>
  <dl>
    <div v-for="key of Object.keys(terms)">
      <dt class="defined-term">{{ key }}</dt>
      <dd class="term-definition" v-html="definition(key, terms)"></dd>
    </div>
  </dl>
</template>

<script>
import { renderTermLinksToHTML } from './term-tag'
export default {
  props: {
    terms: {
      type: Object,
      required: true
    }
  },
  methods: {
    definition (key) { return renderTermLinksToHTML(key, this.terms) }
  }
}
</script>

<style>
  dd {
    margin-inline-start: 1em;
    padding: 0 0 0.75em 0;
  }

  dt.defined-term {
    font-weight: 600;
    color: #3eaf7c;
  }

 .term {
    font-weight: normal;
    position: relative;
  }

  .term::after{
    content: '?';
    position: absolute;
    top: -9px;
    right: -5px;
    font-size: 12px;
  }

  .term-not-found {
    color: darkred;
  }
</style>
