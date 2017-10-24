import {Provider} from "react-redux"
import store from "./redux/store"
import AppViewContainer from "./modules/AppViewContainer"

import React, {Component} from "react"
import {AppRegistry} from "react-native"

export interface Props { }
export interface State { }

class PepperoniAppTemplate extends Component<Props, State> {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    )
  }
}

AppRegistry.registerComponent("PepperoniAppTemplate", () => PepperoniAppTemplate)
