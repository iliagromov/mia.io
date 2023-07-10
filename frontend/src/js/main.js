
const { createApp } = Vue;
const { createVuetify } = Vuetify;

const vuetify = createVuetify();

const app = createApp({
  el: "#app",
  data: () => ({
    question: 'What is your biggest regret?',
    textarea: '',
    email: '',
    quizSection: 0,
    sayNo: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()\\[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'E-mail must be valid',
    ],
    textareaRules: [
      v => !!v || 'Answer is required',
    ],


  }),

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
const getAcquaintedText = document.querySelector('.getAcquaintedText');
if (textAnswer) {
  new Writer(textAnswer);
}
var AcquaintedTextVisible = 0;

if (getAcquaintedText) {
  getAcquaintedText.style.visibility = "hidden";
  const callback = () => {
    AcquaintedTextVisible = AcquaintedTextVisible + 1;
    console.log("🚀 ~ file: main.js:66 ~ callback ~ AcquaintedTextVisible:", AcquaintedTextVisible)
    
    if(AcquaintedTextVisible === 2){
      new Writer(getAcquaintedText);
      getAcquaintedText.style.visibility = "visible";
    }
   
  }
  const options = {
    threshold: 0.5 // 1 – полная видимость элемента, 0.5 – половина и т.д.
  }
  const observer = new IntersectionObserver(callback, options);

  observer.observe(getAcquaintedText)
}


