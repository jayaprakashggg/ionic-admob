import { Component } from "@angular/core";
import { NavController, Platform } from "ionic-angular";
import {
  AdMobFree,
  AdMobFreeBannerConfig,
  AdMobFreeInterstitialConfig,
  AdMobFreeRewardVideoConfig
} from "@ionic-native/admob-free";
const config: AdMobFreeBannerConfig = {
  isTesting: true,
  autoShow: true
};
const bannerConfig: AdMobFreeBannerConfig = {
  id: "ca-app-pub-7830018553893784/6731471022",
  isTesting: false,
  autoShow: true
};
const interstitialConfig: AdMobFreeInterstitialConfig = {
  id: "ca-app-pub-7830018553893784/9485626870",
  isTesting: false,
  autoShow: true
};
const rewardVideoConfig: AdMobFreeRewardVideoConfig = {
  id: "ca-app-pub-7830018553893784/7983529866",
  isTesting: false,
  autoShow: true
};

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    private adMobFree: AdMobFree,
    public platform: Platform
  ) {
    this.platform.ready().then(readySource => {
      console.log("Platform ready from", readySource);
      this.adMobFree.banner.config(config);
      this.adMobFree.banner
        .prepare()
        .then(() => {
          console.log("bannerShow");
        })
        .catch(e => console.log(e));
    });
  }

  onClickBannerShow() {
    this.platform.ready().then(readySource => {
      console.log("Platform ready from", readySource);
      this.adMobFree.banner.config(bannerConfig);
      this.adMobFree.banner
        .prepare()
        .then(() => {
          console.log("banner");
        })
        .catch(e => console.log(e));
    });
  }

  onClickBannerHide() {
    this.adMobFree.banner
      .show()
      .then(() => {
        console.log("bannerShow");
      })
      .catch(e => console.log(e));
  }

  onClickInterstitialShow() {
    this.platform.ready().then(readySource => {
      console.log("Platform ready from", readySource);
      this.adMobFree.interstitial.config(interstitialConfig);
      this.adMobFree.interstitial
        .prepare()
        .then(() => {
          console.log("interstitial");
        })
        .catch(e => console.log(e));
    });
  }

  onClickRewardedShow() {
    this.platform.ready().then(readySource => {
      console.log("Platform ready from", readySource);
      this.adMobFree.rewardVideo.config(rewardVideoConfig);
      this.adMobFree.rewardVideo
        .prepare()
        .then(() => {
          console.log("rewardVideo");
        })
        .catch(e => console.log(e));
    });
  }

  onClickBannerShow2() {
    this.adMobFree.banner
      .show()
      .then(() => {
        console.log("bannerShow");
      })
      .catch(e => console.log(e));
  }

  onClickBannerHide2() {
    this.adMobFree.banner
      .hide()
      .then(() => {
        console.log("bannerHide");
      })
      .catch(e => console.log(e));
  }

  onClickBannerRemove2() {
    this.adMobFree.banner
      .remove()
      .then(() => {
        console.log("bannerRemove");
      })
      .catch(e => console.log(e));
  }
}
