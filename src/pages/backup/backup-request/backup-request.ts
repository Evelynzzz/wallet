import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';

// Providers
import { Logger } from '../../../providers/logger/logger';
// import { PopupProvider } from '../../../providers/popup/popup';

// Pages
// import { DisclaimerPage } from '../../onboarding/disclaimer/disclaimer';
import { BackupGamePage } from '../backup-game/backup-game';

@Component({
  selector: 'page-backup-request',
  templateUrl: 'backup-request.html'
})
export class BackupRequestPage {
  private walletId: string;
  private fromOnboarding: boolean;
  private password: string;
  /** whether 3 tips are checked */
  public checked;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private logger: Logger
  ) {
    this.walletId = this.navParams.get('walletId');
    this.fromOnboarding = this.navParams.get('fromOnboarding');
    this.password = this.navParams.get('password');
    this.checked = {
      first: false,
      second: false,
      third: false
    };
  }

  ionViewDidLoad() {
    this.logger.info('Loaded: BackupRequestPage');
  }

  /**
   * Start backup game if 3 tips are checked.
   */
  public initBackupFlow(): void {
    // this.navCtrl.push(BackupWarningPage, {
    //   walletId: this.walletId,
    //   fromOnboarding: true
    // });
    // Go to mnemonic backup game page directly
    this.navCtrl.push(BackupGamePage, {
      walletId: this.walletId,
      fromOnboarding: this.fromOnboarding,
      password: this.password
    });
  }

  // public doBackupLater(): void {
  //   let title = this.translate.instant('Watch Out!');
  //   let message = this.translate.instant(
  //     'If this device is replaced or this app is deleted, neither you nor Trias  can recover your funds without a backup.'
  //   );
  //   let okText = this.translate.instant('I understand');
  //   let cancelText = this.translate.instant('Go Back');
  //   this.popupProvider
  //     .ionicConfirm(title, message, okText, cancelText)
  //     .then(res => {
  //       if (!res) return;
  //       let title = this.translate.instant('Are you sure you want to skip it?');
  //       let message = this.translate.instant(
  //         'You can back up your wallet later from your wallet settings.'
  //       );
  //       let okText = this.translate.instant('Yes, skip');
  //       let cancelText = this.translate.instant('Go Back');
  //       this.popupProvider
  //         .ionicConfirm(title, message, okText, cancelText)
  //         .then(res => {
  //           if (!res) return;
  //           this.navCtrl.push(DisclaimerPage);
  //         });
  //     });
  // }
}
