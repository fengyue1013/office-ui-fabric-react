/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

import {
  Toggle,
  Fabric,
  FocusTrapZone
} from '../../../../index';

export const ToggleBasicExample = () => (
  <div>
    <Toggle
      defaultChecked={ true }
      label='Enabled and checked'
      onText='On'
      offText='Off' />
    <Toggle
      defaultChecked={ false }
      label='Enabled and unchecked'
      onText='On'
      offText='Off' />
    <Toggle
      defaultChecked={ true }
      disabled={ true }
      label='Disabled and checked'
      onText='On'
      offText='Off' />
    <Toggle
      defaultChecked={ false }
      disabled={ true }
      label='Disabled and unchecked'
      onText='On'
      offText='Off' />
  </div>
);

export var TestToggle = React.createClass({
  getInitialState: function () {
    return { count: 0, toggleSwitchCount: 0 };
  },

  componentDidUpdate: function () {
    console.log("updated");
    var toggle = document.getElementsByClassName("ms-Toggle-button")[0];
    toggle.setAttribute('tabindex', '0');
    (toggle as HTMLButtonElement).focus();
  },

  render: function () {
    console.log('calling render');
    return (
      <Fabric>
        <FocusTrapZone>
          <div>
            <Toggle
              defaultChecked={ false }
              label='Enabled and unchecked'
              onText='On'
              offText='Off'
              onChanged={ this.handleToggleChanged } />
            <button
              id="Button1"
              onClick={ this.handleButtonClick }
              >
              button clicked { this.state.count }times
            </button>
            <div>
              toggle switched times: { this.state.toggleSwitchCount }
            </div>
          </div>
        </FocusTrapZone>
      </Fabric>
    );
  },

  handleButtonClick: function () {
    this.setState({ count: this.state.count + 1 });
  },

  handleToggleChanged: function (checked: boolean) {
    this.setState({ toggleSwitchCount: this.state.toggleSwitchCount + 1 });
  }
});
