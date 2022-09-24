import LaravelEcho from "laravel-echo"


export default {
    install(app, options) {
        const echo = new LaravelEcho(options)

        app.config.globalProperties.$echo = echo
        app.provide('echo', echo)
    }
}