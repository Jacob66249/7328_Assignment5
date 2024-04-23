//Application test case
const {
    Smartphone,
    MobileWebsite,
    ExtendedMobileWebsite,
  } = require('../src/Application');
  
  describe('Application Tests', () => {
    test('Smartphone should connect using Application interface', () => {
      const mySmartphone = new Smartphone(); 
      expect(() => mySmartphone.connect()).not.toThrow(); 
    });
  
    test('MobileWebsite should connect using Application interface', () => {
      const myMobileWebsite = new MobileWebsite();
      expect(() => myMobileWebsite.connect()).not.toThrow();
    });
  
    test('ExtendedMobileWebsite should use MobileWebsite functionalities', () => {
      const myExtendedMobileWebsite = new ExtendedMobileWebsite();
      expect(() => myExtendedMobileWebsite.connect()).not.toThrow();
      expect(() => myExtendedMobileWebsite.usingMobileWebsite()).not.toThrow();
    });
  });
  