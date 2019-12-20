var vm = new Vue({
  el: "#app",
  components: {
    paystack: VuePaystack.default
  },
  data: {
    useremail: "",
    paystackkey: "pk_test_7051c407a5bf5a04fe3b10be45e86739484bcc3d", //paystack public key
    email: "", // Customer email
    amount: 1000000 // in kobo
  },
  methods: {
    assignEmail(id) {
      id = this.email;
    },
    callback(response) {
      console.log(response);
    },
    close() {
      console.log("Payment closed");
    }
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
  }
});
