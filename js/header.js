let app = new Vue({
  el: '#header',
  data: {
    searchQuery: '',
    isActive: false,
    en: true,
    ua: false
  },
  mounted() {
    document.addEventListener('click', this.closeLanguagePopup);
  },

  destroyed() {
    document.removeEventListener('click', this.closeLanguagePopup);
  },

  methods: {
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
