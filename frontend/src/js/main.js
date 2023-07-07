
const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
    el: "#app",
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    ex3: 'primary',
})
app.use(vuetify).mount('#app');