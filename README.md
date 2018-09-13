# stanwood vue-plugins

[![VueJS v2 compatible](https://img.shields.io/badge/Vuejs%202-compatible-green.svg)](https://vuejs.org/)
[![License: MIT](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)

## Install

```
$ npm i @stanwood/vue-plugins
```

### Access plugins

```
# In `main.js` add:
import swVuePlugins from '@stanwood/vue-plugins'
Vue.use(swVuePlugins)
```

### Example usage

#### getImagePath

```
{{ $swplugins.getImagePath('assets', 'images', 'image.svg') }}
```

#### imageResize

```
{{ $swplugins.imageResize('test.png', 300, 1000, 2000, 500) }}
```

#### locationRedirect

```
<template lang="html">
  <div>
    <h1>This is a redirect example</h1>
    <button @click.prevent="redirect">Redirect</button>
  </div>
</template>

<script>
export default {
  name: 'LocationRedirect',
  methods: {
    redirect () {
      // targets: _blank | _self | _parent | _top
      this.$swplugins.$locationRedirect(this, 'http://google.com/', '_blank')
    }
  }
}
</script>
```

#### setBackground

```
{{ $swplugins.setBackground('myBackgroundImage.png', 'http://me.com/mynewbackgroundimage', 'myBackgroundImageClass') }}
```

#### setDocumentTitle

```
<template lang="html">
  <div>
    <sw-doctitle
      :title="$swplugins.setDocumentTitle('My Page')"
      ></sw-doctitle>
  </div>
</template>

<script>
import DocTitle from '@/components/doctitle'

export default {
  name: 'Doctitle',
  components: {
    'sw-doctitle': DocTitle
  }
}
</script>

# components/doctitle.js
export default {
  name: 'DoctitleComponent',
  props: [
    'title'
  ],
  created () {
    document.title = this.title
  },
  watch: {
    title () {
      // only used when the title changes after page load
      document.title = this.title
    }
  }
}
```

#### titleCase

```
{{ $swplugins.toTitleCase('title case me') }}
```

#### togglePassword

```
<template lang="html">
  <div>
    <h1>This is a toggle example to show / hide a password</h1>
    <input type="password" id="password">
    <button @click.prevent="toggle">show / hide</button>
  </div>
</template>

<script>
export default {
  name: 'TogglePassword',
  methods: {
    toggle () {
      this.$swplugins.togglePassword('#password')
    }
  }
}
</script>
```

#### urlBeautify

```
{{ $swplugins.urlBeautify('I am a dummy text') }}
```
