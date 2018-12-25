'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class MovieDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  onBack = () => {
    this.props.navigation.goBack()
  }

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
  }
});


export default MovieDetail;