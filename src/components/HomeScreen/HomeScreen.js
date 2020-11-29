import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, FlatList, ActivityIndicator, View, Text } from 'react-native';
import {connect} from 'react-redux';
import RNEventSource from 'react-native-event-source'
import Post from '../Post';
import {getPosts} from './actions/actions';
import {BASE_URL} from '../../constants';

class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      allPosts: props.allPosts,
      newPost: {}
    }
  }

  componentDidMount(){
    this.props.getPosts();
    this.serverSentEventSource = new RNEventSource(`${BASE_URL}/get-feed-server-sent`);
    this.serverSentEventSource.addEventListener('message', (event) => {
      let receivedPostData = JSON.parse(event.data)
      if(receivedPostData.endOfMsg){
        this.setState((state) => ({
          allPosts: [ state.newPost , ...state.allPosts ]
        }));
      }else{
        this.setState((state) => ({
          newPost: { ...state.newPost, ...receivedPostData, isLatestPost: true }
        }));
      }      
    });
  }

  componentWillUnmount() {
    this.serverSentEventSource.removeAllListeners();
    this.serverSentEventSource.close();
  }

  render(){
    const { loading } = this.props;
    const { allPosts } = this.state;
    return(
      <SafeAreaView style={styles.wrapper}>
        { !loading ? <FlatList
          data={allPosts}
          renderItem={({item}) => <Post {...item} />}
          keyExtractor={item => item.post_id}
        /> : <ActivityIndicator size="small"/>}
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImage: {
    height: 500,
    width: 500
  },
  loaderWrapper:{
    paddingRight:9,
    paddingLeft:9
  }
});

const mapStateToProps = (state) => {
  return{
    allPosts: state.homeScreenReducer.allPosts,
    loading: state.homeScreenReducer.loading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);