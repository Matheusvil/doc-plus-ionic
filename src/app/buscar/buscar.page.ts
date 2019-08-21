import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Map, tileLayer, marker } from 'leaflet';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {

  constructor(private menu: MenuController) {
  }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  ngOnInit() {
  }
  map: Map;

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map('map').setView([-23.065814, -45.606919], 10);
    tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([-23.065814, -45.606919]).addTo(this.map)
      .bindPopup('Marker')
      .openPopup();
  }

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    this.map.remove();
  }

}
