import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

  componentDidLoad() {
    console.log('El componente AppHome se ha renderizado!!!');
  }

  render() {
    return (
      <div class='app-home'>
        <p>
          HOME
        </p>

        <stencil-route-link url='/profile/stencil'>
          <button>
            GO PROFILE PAGE
          </button>
        </stencil-route-link>
      </div>
    );
  }
}
