/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, css, customElement, property } from 'lit-element'
import { DateTime } from 'luxon';
  
@customElement('journey-search')
export class JourneySearch extends LitElement {
  
  @property( { type : String }  ) 
  fromValue = '';

  @property( { type : String }  ) 
  toValue = '';
  
  @property( { type : String }  ) 
  dateValue = '';

  @property( { type : String }  ) 
  timeValue = '';


  constructor() {
    super();

    this.dateValue = DateTime.local().toISODate();
    this.timeValue = DateTime.local().toLocaleString(DateTime.TIME_24_SIMPLE);
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    form{
      display: flex;
      flex-direction: column;
    }
    .row{
      min-width: 300px;
      min-height: 30px;
      display: block;
      margin: 5px auto;
    }
    .row label{
      float: left;
      padding-top: 9px;
    }
    .row input:not([type=submit]){
      float: right;
      height: 30px;
      width: 230px;
    }
    h1{
      background: #f2a600;
      margin: 0;
      padding: 20px;
    }

    .location-picker{
      min-width: 300px;
      min-height: 50px;
      display: block;
      padding-bottom: 20px;
      background: #f2a600;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }
    .location-picker .row{
      background: white;
      border-radius: 5px;
      padding: 15px 10px;
    }
    .location-picker .row.from{
      margin-bottom: 0;
      border-radius: 5px 5px 0 0;
    }
    .location-picker .row.to{
      margin-top: 0;
      border-radius: 0 0 5px 5px;
    }

    `;
  } 

  render(){
    return html`
    <h1>Find Direct Trains</h1>

    <form>
      <div class="location-picker">
        <station-picker class="row from" inputlabel="From"></station-picker>
  
        <station-picker class="row to" inputlabel="To"></station-picker>
      </div>

      <div class="row">
        <label for="date">Date</label>
        <input type="date" name="date" required value="${this.dateValue}">
      </div>

      <div class="row">
        <label for="time">Time</label>
        <input type="time" name="time" required value="${this.timeValue}">
      </div>

      <div class="row">
        <input type="submit" value="Search">
      </div>
    </form>
    `;
  }
}
  
  