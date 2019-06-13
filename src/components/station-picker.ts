import { LitElement, html, css, customElement, property } from 'lit-element';
import { StationInfo } from '../services/StationInfo';
import { Station } from 'models/Station';
import {classMap} from 'lit-html/directives/class-map.js';
  
@customElement('station-picker')
export class StationPicker extends LitElement {

  _stationInfo = new StationInfo();

  @property( { type : Boolean }  ) 
  showModal = false;

  @property( { type : String }  ) 
  inputLabel = '';

  @property( { type : String }  ) 
  chosenStation = '';

  @property( { type : Array }  ) 
  stations: Array<Station> = this._stationInfo.stations.slice(0, 8);

  @property( { type: Object, reflect: true } )
  selectedStation: Station;

  constructor() {
    super();
    if ('permissions' in navigator) {
      navigator.permissions.query({name: 'geolocation'}).then(status => {
        console.log(status.state)
        console.log(status.state == 'prompt')
        if (status.state == 'granted') {
          this.getCurrentLocation();
        }
      });
    }
  }

  toggleWindow(e?:Event) {
    if(this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }
  }

  selectStation(e: any) {
    this.toggleWindow();
    const station = JSON.parse(e.target.getAttribute('data-station')) as Station;
    (<HTMLInputElement>this.shadowRoot.querySelector('input.formField')).value = station.name;
    this.selectedStation = station;
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.info(position)
        this.stations = this._stationInfo.findClosest(position.coords);
      },
      (error) => {
        console.error(error)
      })
  }

  textSearch(e: Event) {
    const searchValue = (<HTMLInputElement>e.target).value;
    (<HTMLInputElement>this.shadowRoot.querySelector('.modal-search')).value = searchValue;
    console.log(searchValue)
    this.stations = this._stationInfo.findByNameOrCrs(searchValue);
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    label{
      float: left;
      padding-top: 9px;
    }
    input.formField{
      float: right;
      height: 30px;
      width: 230px;
    }

    .modal{
      position: absolute;
      background: pink;
      width: 100%;
      height: 100%;
      left: 0;
      bottom: 0;
      transform: translateY(100%);
      z-index: 2;
      transition: 0.5s transform;
    }
    .modal.visible{
      transform: translateY(0);
    }

    .modal ul {
      margin: 30px auto;
      max-width: 300px;
      padding: 0;
    }
    .modal ul li{
      padding: 10px 5px;
      list-style: none;
      border-top: 1px solid black;
    }
    .modal ul li:last-of-type{
      border-bottom: 1px solid black;
    }
    `;
  }

  render(){
    return html`
      <label for="${this.inputLabel.toLowerCase()}">${this.inputLabel}</label>
      <input type="text" name="${this.inputLabel.toLowerCase()}" id="${this.inputLabel.toLowerCase()}" class="formField" required @input="${this.textSearch}" @focus="${this.toggleWindow}">
      <div class="${classMap({modal: true, visible: this.showModal})}">
        <header>
          <button @click="${this.toggleWindow}">X</button>
          <!-- TODO Conditional if supported-->
          <button @click="${this.getCurrentLocation}">Use Current Location</button>
        </header>
        <section>
          <input type="search" class="modal-search" @input="${this.textSearch}">
          <ul>
            ${this.stations.map(station => {
              return html`<li @click="${this.selectStation}" tabindex="-1" data-station="${JSON.stringify(station)}">
                            <span class="crs">[${station.crs}]</span> ${station.name} 
                            ${station.distance ? html`<span class="distance">${station.distance}km</span>`: ''}
                          </li>`})}
          </ul>
        </section>
      </div>
    `;
  }
  }
  
  