<div align="center">
  <a href="https://splidejs.com" target="_blank">
      <img width="70" src="images/logo.svg">
  </a>
  <a href="https://v3.vuejs.org/" target="_blank">
      <img width="70" src="images/vue-logo.svg">
  </a>

  <h1>This is a fork of Vue Splide!</h1>
  <h3>
    <a href="https://www.npmjs.com/package/@splidejs/vue-splid">See the original package here</a>
  </h3>
  <p>This fork was created to resolve a typescript type error in the `merge.ts` file, caused by an old typescrtipt version in @splidejs/vue-splide.</p>

  <p>
    Vue Splide is the Vue component for the
    <a href="https://github.com/Splidejs/splide">Splide</a> slider/carousel.
  </p>

  <p>
    <a href="https://splidejs.com/integration/vue-splide/">Getting Started</a>
    <br>
    <a href="https://splidejs.com/">Demo</a>
    <br>
    <a href="https://github.com/Splidejs/splide/discussions">Discussions</a>
  </p>
</div>

## Caveat

The latest version only supports **Vue 3**.
You have to use the old version (0.3.5) for Vue 2, but the Splide version is also outdated.


## Quick Start
Get the latest version:
Using NPM:
```
$ npm install whitedigital-eu-vue-splide
```
Using Yarn:
```
$ yarn add whitedigital-eu-vue-splide
```

Import CSS and components:

```vue
<template>
  <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
    <SplideSlide>
      <img src="image1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="image2.jpg" alt="Sample 2">
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from 'whitedigital-eu-vue-splide';
import { defineComponent } from 'vue';
import 'whitedigital-eu-vue-splide/css';

export default defineComponent( {
  components: { Splide, SplideSlide },
} );
</script>
```

Visit [here](https://splidejs.com/integration/vue-splide/) for more details.


## Support Splide

Please support the project if you like it!
- [GitHub Sponsors](https://github.com/sponsors/NaotoshiFujita)


## License
Vue Splide and Splide are released under the MIT license.
© 2022 Naotoshi Fujita
