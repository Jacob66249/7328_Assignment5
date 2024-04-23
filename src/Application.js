class Smartphone {
    connect() {
      console.log('Smartphone connected');
    }
  }
  
  class MobileWebsite {
    connect() {
      console.log('Mobile Website connected');
    }
  }
  
  class ExtendedMobileWebsite {
    connect() {
      console.log('Extended Mobile Website connected');
    }
  
    usingMobileWebsite() {
      console.log('Using Mobile Website features');
    }
  }
  
  module.exports = {
    Smartphone,
    MobileWebsite,
    ExtendedMobileWebsite,
  }; 