let appLot = new Vue({
  el: '#lot',
  data: {
    searchQuery: '',
    coparNnav: true,
    buyNow: false,
    bid: false
  },
  mounted() {

  },

  destroyed() {

  },

  methods: {

    buyNowFunc(el) {
      this.coparNnav = !this.coparNnav;
      setTimeout(() => {
        this.buyNow = !this.buyNow;
      }, 500);
    },

    backNow() {
      this.buyNow = false;
      this.bid = false;
      setTimeout(() => {
        this.coparNnav = true;
      }, 500);

    },


    closeLanguagePopup(event) {
      const languages = document.querySelector('.languages');
      
      if (languages.contains(event.target) == false) {
        this.isActive = false;
      }
    },
    setIsActive(name) {
      if (name === 'en') {
        this.en = true;
        this.ua = false;
      }else if (name === 'ua') {
        this.ua = true;
        this.en = false
      }
      this.isActive = !this.isActive;
    },
  },
})

Vue.config.devtools = true;
