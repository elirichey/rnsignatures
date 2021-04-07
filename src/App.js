import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  saveSignature() {
    this.sign.saveImage();
  }

  reset() {
    this.sign.resetImage();
  }

  onSave(result) {
    console.log('RESULT: ', result);
  }
  onDrag() {
    console.log('DRAGGED');
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.container}>
          <SignatureCapture
            style={styles.capture_view}
            ref={ref => {
              this.sign = ref;
            }}
            onSaveEvent={this.onSave}
            onDragEvent={this.onDrag}
            saveImageFileInExtStorage={false}
            showNativeButtons={false}
            showTitleLabel={false}
            backgroundColor="#FFFFFF"
            strokeColor="#000000"
            minStrokeWidth={4}
            maxStrokeWidth={4}
            viewMode={'portrait'}
          />

          <View style={styles.actions}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.saveSignature();
              }}>
              <Text>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                this.reset();
              }}>
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  capture_view: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
