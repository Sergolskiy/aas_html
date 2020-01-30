let appLot = new Vue({
  el: '#lot',
  data: {
    searchQuery: '',
    coparNnav: true,
    buyNow: false,
    bid: false,
    showErr: false,
    counter: parseInt(document.querySelector('.btn-counter__input').getAttribute('value')),
    step: parseInt(document.querySelector('.btn-counter__input').getAttribute('step')),
    min: parseInt(document.querySelector('.btn-counter__input').getAttribute('min')),
  },
  mounted() {

  },

  destroyed() {

  },

  methods: {


    buyNowFunc(el) {
      this.scroolToLot();
      this.coparNnav = !this.coparNnav;
      setTimeout(() => {
        this.buyNow = !this.buyNow;
      }, 500);
    },

    bidNowFunc(el) {
      this.scroolToLot();
      this.coparNnav = !this.coparNnav;
      setTimeout(() => {
        this.bid = !this.bid;
      }, 500);
    },

    backNow() {
      this.scroolToLot();
      this.buyNow = false;
      this.bid = false;
      setTimeout(() => {
        this.coparNnav = true;
      }, 500);
    },

    scroolToLot(){
      // if(window.innerWidth < 992){
      //   document.getElementById('lot').scrollIntoView();
      // }
    },

    counterMinus() {
      if(this.min === this.counter) return;

      this.counter = this.counter - this.step;
      document.querySelector('.btn-counter__input').value = this.counter;
    },

    counterPlus() {
      this.counter = this.counter + this.step;
      document.querySelector('.btn-counter__input').value = this.counter;
    },

    bidLot() {
      if(this.min === this.counter){
        this.showErr = true;
      } else {
        this.showErr = false;
        $.notify.addStyle('foo', {
          html:
          "<div class='notification'>" +
            "<b>" +
              "success!" +
            "</b>" +
            "<div>" +
              "Your bid has been placed susccesfully. You can check on the status of your bids on My Bids tab in your cabinet. You will also get email notifications if the status has been changed." +
            "</div>" +
          "<div>",
        });
        $.notify('df', {
          style: 'foo'
        });

        this.backNow();
      }
    },

    buyLot() {
      $.notify.addStyle('foo', {
        html:
            "<div class='notification'>" +
            "<b>" +
            "success!" +
            "</b>" +
            "<div>" +
            "Your bid has been placed susccesfully. You can check on the status of your bids on My Bids tab in your cabinet. You will also get email notifications if the status has been changed." +
            "</div>" +
            "<div>",
      });
      $.notify('df', {
        style: 'foo'
      });

      this.backNow();
    },

  },
})

Vue.config.devtools = true;
