import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { GoogleMap, GoogleMapsEvent } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;

  constructor(public platfrom:Platform) {}

  ionViewDidLoad() {
    this.platfrom.ready().then(() => {
      this.map = new GoogleMap('mapEle');

      this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
        console.log('Map Loaded');
      });
    });
  }

}
