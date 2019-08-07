import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import * as esri from 'esri-leaflet-geocoder';
//import { Map as LeafletMap } from 'angular-leaflet';
//import * as L from 'leaflet';
//declare var $: any;
import 'leaflet';
declare let L;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  var map = L.map('map').setView([33.8439408, 9.400138], 12);
 var tiles = L.esri.basemapLayer("Streets").addTo(map);

 // create the geocoding control and add it to the map
 var searchControl = L.esri.Geocoding.geosearch().addTo(map);

 // create an empty layer group to store the results and add it to the map
 var results = L.layerGroup().addTo(map);

 // listen for the results event and add every result to the map
 searchControl.on("results", function(data) {
     results.clearLayers();
     for (var i = data.results.length - 1; i >= 0; i--) {
         results.addLayer(L.marker(data.results[i].latlng));
     }
 });
}


}
