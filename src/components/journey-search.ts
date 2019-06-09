/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import { LitElement, html, customElement } from 'lit-element';
  
@customElement('journey-search')
export class MyElement extends LitElement {

    render(){
      /**
       * Use JavaScript expressions to include property values in
       * the element template.
       */
      return html`<p>Hello World</p>`;
    }
  }
  
  