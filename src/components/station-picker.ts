/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, css, customElement, property } from 'lit-element';
// import Stations from '../assets/stations.json'
  
@customElement('station-picker')
export class StationPicker extends LitElement {

  @property( { type : Boolean }  ) 
  showModal = false;

  @property( { type : String }  ) 
  inputLabel = '';

  @property( { type : String }  ) 
  chosenStation = '';

  @property( { type : Array }  ) 
  stations = '';

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
    return html`
      <label for="${this.inputLabel.toLowerCase()}">${this.inputLabel}</label>
      <input type="text" name="${this.inputLabel.toLowerCase()}" id="${this.inputLabel.toLowerCase()}" required @focus="${this.toggleWindow}">

      <div class="${this.showModal ? 'modal visible' : 'modal'}">
        <header>
          <button @click="${this.toggleWindow}">X</button>
        </header>
        <section>
          <ul>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 1</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 2</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 3</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 4</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 5</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 6</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 7</li>
            <li @click="${this.selectStation}" tabindex="-1"><span class="crs-code">[ABC]</span> Station 8</li>
          </ul>
        </section>
      </div>
    `;
  }
  }
  
  