
const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
})
app.use(vuetify).mount('#app');