'use strict';

import React, { Component } from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Linking
} from 'react-native';

class MovieDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  onBack = () => {
    this.props.navigation.goBack()
  }
  onSuccess(e) {
    alert(e.data.toString())
    // this.scanner.reactivate() //dahin scan
    // this.scanner.reactivate()
    // Linking
    //   .openURL(e.data)
    //   .catch(err => console.error('An error occured', err));
  }

  // _reactivate = throttle(() => { if (this.scanner) this.scanner.reactivate(); }, 2000, {trailing: true, leading: false});

  // constructor(props) {
  //   // this.props.getMovieDetail(movie)
  // }

  render() {
    // let sta=this.props
    // alert(JSON.stringify(this.props.movie))
    return (
      <View style={styles.container}>
        <View style={styles.coverContainer}>
          <TouchableOpacity 
            style={styles.backContainer}
            onPress={this.onBack}
          >
            <Text style={styles.backText}>
               Back
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.bodyContainer}>
          <Text style={styles.description}>{'Ene kinonii id : '+this.props.movie.data.id}</Text>
          <QRCodeScanner
          ref={(node) => { this.scanner = node }}
          onRead={this.onSuccess.bind(this)}
          topContent={
            <Text style={styles.centerText}>
              Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
        </View>        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(28, 32, 53)',
	},
  coverContainer: {
    height: 200,
    backgroundColor: 'rgb(38, 44, 72)',
  },
  backContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    //backgroundColor: 'green',
  },
  bodyContainer:{
    flex:2,
  },
  description:{
    position: 'absolute',
    top:150,
    left:50,
    color:'white',
  },
  backText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});


export default MovieDetail;