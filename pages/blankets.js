import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Modal,
  Text,
  TouchableWithoutFeedback } from 'react-native';
import ImageElement from '../components/ImageElement';

export default class Blankets extends Component {
  state = {
    modalVisible: false,
    modalImage: require('../assets/blankets/1.jpg'),
    images: [
      require('../assets/blankets/2.jpg'),
      require('../assets/blankets/3.jpg'),
      require('../assets/blankets/4.jpg'),
      require('../assets/blankets/5.jpg'),
      require('../assets/blankets/6.jpg'),
      require('../assets/blankets/7.jpg'),
    ]
  }

  setModalVisible(visible, imageKey) {
    this.setState({ modalImage: this.state.images[imageKey] });
    this.setState({ modalVisible: visible });
  }

  getImage() {
    return this.state.modalImage;
  }
  render() {
    const images = this.state.images.map((val, key) => {
      return (
        <TouchableWithoutFeedback
                key={key}
                onPress={() => { this.setModalVisible(true, key); }}
        >
                <View style={styles.imagewrap}>
                  <ImageElement imgsource={val}></ImageElement>
                </View>
             </TouchableWithoutFeedback>
        );
    });

    return (
        <View style={styles.container}>
          <Modal
            style={styles.modal} animationType={'fade'}
            transparent={true} visible={this.state.modalVisible}
                    onRequestClose={() => {}}
          >

                  <View style={styles.modal}>
                    <Text
                      style={styles.text}
                      onPress={() => { this.setModalVisible(false); }}
                    >
                          Close</Text>
                    <ImageElement imgsource={this.state.modalImage}></ImageElement>
                  </View>
          </Modal>

          {images}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#eee',
  },
  imagewrap: {
    margin: 2,
    padding: 2,
    height: (Dimensions.get('window').height / 6) - 12,
    width: (Dimensions.get('window').width / 2) - 4,
    backgroundColor: '#fff'
  },
  modal: {
    flex: 1,
    padding: 40,
    backgroundColor: 'rgba(0,0,0, 0.9)'
  },
  text: {
    color: '#fff'
  }
});
