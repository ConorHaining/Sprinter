import { LitElement, html, css, customElement, property } from 'lit-element';
import { StationInfo } from '../services/StationInfo';
import { Station } from 'models/Station';
  
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

  toggleWindow(e?:Event) {
    if(this.showModal) {
      this.showModal = false;
    } else {
      this.showModal = true;
    }
  }

  selectStation(e: any) {
    this.toggleWindow();
    const station = e.target.innerText;
    this.shadowRoot.querySelector('input').value = station;
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

  static get styles() {
    return css`
    :host {
      display: block;
    }
    label{
      float: left;
      padding-top: 9px;
    }
    input:not([type=submit]){
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
    console.log(this.stations)
    return html`
      <label for="${this.inputLabel.toLowerCase()}">${this.inputLabel}</label>
      <input type="text" name="${this.inputLabel.toLowerCase()}" id="${this.inputLabel.toLowerCase()}" required @focus="${this.toggleWindow}">

      <div class="${this.showModal ? 'modal visible' : 'modal'}">
        <header>
          <button @click="${this.toggleWindow}">X</button>
          <!-- TODO Conditional if supported-->
          <button @click="${this.getCurrentLocation}">Use Current Location</button>
        </header>
        <section>
          <ul>
            ${this.stations.map(station => {
              return html`<li @click="${this.selectStation}" tabindex="-1">
                            <span class="crs-code">[${station.crs}]</span> ${station.name} 
                            ${station.distance ? html`<span class="distance">${station.distance}km</span>`: ''}
                          </li>`})}
          </ul>
        </section>
      </div>
    `;
  }
  }
  
  