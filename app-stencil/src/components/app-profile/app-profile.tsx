import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
  /**
    Prop : similar a input, recibe valor de otro componente
   */
export class AppProfile
{
   componentDidLoad() {
    console.log('El componente AppHome se ha renderizado!!!');
   }

  name: string ="MTX";

  render() {
    if (this.name) {
      return ( <div>Hola {this.name}</div> )
    } else {
      return ( <div>Hola</div> )
    }
  }
}
