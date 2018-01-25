import React, { Component } from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import About from '../pages/about';
import Contact from '../pages/contact';
import Blankets from '../pages/blankets';
import Accessories from '../pages/accessories';
import Stitch from '../pages/stitch';

export default class Router extends Component {
  render() {
    const Footer = TabNavigator({
      About: {
        screen: StackNavigator({
          About: { screen: About }
        })
      },
      Blankets: {
        screen: StackNavigator({
          Blankets: { screen: Blankets }
        })
      },
      Stitch: {
        screen: StackNavigator({
          Stitch: { screen: Stitch }
        })
      },
      Accessories: {
        screen: StackNavigator({
          Accessories: { screen: Accessories }
        })
      },
      Contact: {
        screen: StackNavigator({
          Contact: { screen: Contact }
        })
      }
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        labelStyle: { fontSize: 10 }
      }
    });
    return (
      <View style={{ flex: 1 }}>
        <Footer />
      </View>
    );
  }
}
