//example for listening to key stroke
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // name property with every key stroke.
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    increment(input) {
      this.counter = this.counter + input;
    },
    decrement(number) {
      this.counter = this.counter - number;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
