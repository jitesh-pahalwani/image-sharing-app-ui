import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCamera, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.headerLeftSection}>
          <FontAwesomeIcon style={styles.cameraStyle} icon={faCamera} size={20} />
          <Text style={styles.headerText}>Image Sharing App</Text>
        </View>
        <View>
        <FontAwesomeIcon icon={faPaperPlane} size={20} />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerLeftSection: {
    flex: 1,
    flexDirection: 'row',
  },
  headerText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cameraStyle: {
    marginRight: 15,
  }
});
