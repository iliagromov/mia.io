
const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
    el: "#app",
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        question: 'What is your biggest regret?',
        textarea: '',
        email: '',
        quizSection: 0,
        ex3: 'primary',

    }),
    computed: {
        isTextarea () {
           return !this.textarea
        }
    }
      
})
app.use(vuetify).mount('#app');


class Writer {
    constructor(node) {
      this.node = node;
      
      if (!this.node) return;
  
      this.timer = 50; // .2s
      this.broken = this.node.textContent.split('');
  
      this._init();
    }
  
    _init() {
      this.node.textContent = '';
      let i = 0;
  
      let interval = setInterval(() => {
        this.node.textContent += this.broken[i];
  
        i++;
  
        if (i >= this.broken.length) clearInterval(interval);
      }, this.timer);
    }
  }
  
  const textAnswer = document.querySelector('.textAnswer');
  if(textAnswer){
    new Writer(textAnswer);
  }