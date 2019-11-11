import { async, ComponentFixture } from '@angular/core/testing';

import { TestUtils } from '../../../test';

import { LanguagePage } from './language';

describe('LanguagePage', () => {
  let fixture: ComponentFixture<LanguagePage>;
  let instance;

  beforeEach(async(() =>
    TestUtils.configurePageTestingModule([LanguagePage]).then(testEnv => {
      fixture = testEnv.fixture;
      instance = testEnv.instance;
      fixture.detectChanges();
    })));
  afterEach(() => {
    fixture.destroy();
  });

  describe('Methods', () => {
    describe('#save', () => {
      it('should set new language', () => {
        const setLang = spyOn(instance.languageProvider, 'set');
        instance.save('fr');
        expect(setLang).toHaveBeenCalled();
        expect(setLang).toHaveBeenCalledWith('fr');
      });
      it('should pop the nav control', () => {
        instance.save('fr');
        expect(instance.navCtrl.pop).toHaveBeenCalled();
      });
      it('should get wallets and update remote prefs with correct parameter', () => {
        jasmine.clock().install();
        spyOn(instance.profileProvider, 'getWallets').and.returnValue(
          'correct wallet'
        );
        const updatePrefs = spyOn(
          instance.walletProvider,
          'updateRemotePreferences'
        );
        instance.save('fr');

        jasmine.clock().tick(1000);

        expect(instance.profileProvider.getWallets).toHaveBeenCalled();
        expect(updatePrefs).toHaveBeenCalledWith('correct wallet');
        jasmine.clock().uninstall();
      });
    });
  });
});
