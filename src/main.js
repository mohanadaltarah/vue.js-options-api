import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Emitter Config
import mitt from "mitt";

const emitter = mitt();

const vueApp = createApp(App);
vueApp.provide("emitter", emitter).use(router).mount("#app");
