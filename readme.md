# Laravel Echo Vue

This package enables the Laravel Echo library to set the property for Vue 3. Laravel Echo setup is the same as in the document.

## Install

via yarn

```bash
yarn add laravel-echo-vue3
```

or via npm

```bash 
npm install --save laravel-echo-vue3
```

If you are going to use Pusher you need to install pusher-js

via npm

```bash 
npm install --save pusher-js
```

or via yarn 

```bash 
yarn add pusher-js
```


## Usage

### Initialize

```js
import App from '@/App.vue'
import Pusher from 'pusher-js';
import LaravelEcho from "laravel-echo-vue3"

const app = createApp(App)


const options = {
    broadcaster: 'pusher',
    key: import.meta.env.VITE_PUSHER_APP_KEY,
    cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    forceTLS: true
}

app.use(LaravelEchoVue, {
    ...options,
    client: new Pusher(options.key, options)
})

app.mount('#app')

```