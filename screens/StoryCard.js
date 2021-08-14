import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from 'react-native-vector-icons/Ionicons'

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.view}>
            <Image source={require('../assets/story_image_1.png')} style={styles.image} />
          </View>
          <View style={styles.textview}>
            <Text style={styles.title}>{this.props.story.title}</Text>
            <Text style={styles.author}>{this.props.story.author}</Text>
            <Text style={styles.description}>{this.props.story.description}</Text>
          </View>
          <View style={styles.actionContainer}>

            <View style={styles.likeButton}>
              <Icon name={'heart'} size={30} color={'white'} />
              <Text style={styles.likeText}> 10K</Text>
            </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '95%',
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain'
  },
  view: {
    backgroundColor: '#2F345D',
    borderRadius: 3,
    margin: 15
  },
  title: {
    fontSize: RFValue(25),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    textAlign: 'center',
    marginTop: 8

  },
  author: {
    fontSize: RFValue(18),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    textAlign: 'center',
    marginTop: 8
  },
  description: {
    fontSize: RFValue(13),
    fontFamily: 'Bubblegum-Sans',
    color: 'white',
    textAlign: 'center',
    marginTop: 8

  },
  textview: {
    // paddingLeft: 20,
    justifyContent: 'center'
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }

});
