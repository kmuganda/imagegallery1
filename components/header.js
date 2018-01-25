import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.navBar}>
                <View style={styles.middle}>
                  <Image
                    source={require('../assets/LOL-Original-flat.png')}
                    style={styles.image}
                  />
                </View>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#ffffff',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 85,
    paddingTop: 30,
    elevation: 2,
    position: 'relative',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
  },
  image: {
    width: 170,
    height: 40
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
