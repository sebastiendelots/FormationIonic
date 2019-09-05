import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.page.html',
  styleUrls: ['./geolocalisation.page.scss'],
})
export class GeolocalisationPage implements OnInit {

  latitude;
  longitude;
  position;

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.position = "http://maps.google.com/maps?q=loc:" + this.latitude + "," + this.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      this.latitude = data.coords.latitude;
      this.longitude = data.coords.longitude;
      this.position = "http://maps.google.com/maps?q=loc:" + this.latitude + "," + this.longitude;
    });
  }

}
