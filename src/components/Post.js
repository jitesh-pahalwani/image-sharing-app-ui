import React from 'react';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import moment from 'moment';
import { faEllipsisV, faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'

const windowWidth = Dimensions.get('window').width;

const getTimeDifference = (timestamp) => {
  const currentTime = moment(new Date(), 'YYYY-MM-DD hh:mm:ss');
  const postTime = moment(timestamp, 'YYYY-MM-DD hh:mm:ss');
  return currentTime.diff(postTime, 'days');
}

export default function Post(props){
  const { post_url, post_description, post_timestamp, username, profile_image, isLatestPost } = props;
  return (
    <View style={styles.wrapper}>
      <View style={styles.postRow}>
        <View style={styles.rowLeftSection}>
          <Image 
            style={styles.profileImage}
            source={{
              uri: profile_image,
            }}
          />
          <Text style={styles.username}>{username}</Text>
          { isLatestPost ? <View style={styles.redDot} /> : null }
          { isLatestPost ? <Text style={styles.latestPostTextStyle}>Latest Post</Text> : null }
        </View>
        <View>
          <FontAwesomeIcon icon={faEllipsisV} size={25} />
        </View>        
      </View>
      <Image 
        style={styles.post}
        source={{
          uri: post_url,
        }}
      />
      <View style={styles.postRow}>
        <View style={styles.rowLeftSection}>
          <FontAwesomeIcon icon={faHeart} size={25} style={styles.iconMargin} />
          <FontAwesomeIcon icon={faComment} size={25} style={styles.iconMargin}  />
          <FontAwesomeIcon icon={faPaperPlane} size={23} />
        </View>
        <View>
          <FontAwesomeIcon icon={faBookmark} size={25} />
        </View>        
      </View>
      <View style={styles.descriptionRow}>
        <Text style={styles.descriptionUsername}>{username}</Text>
        <Text style={styles.descriptionText}>{post_description}</Text>
      </View>
      { isLatestPost ? 
      <Text style={styles.time}>Just Now</Text> : 
      <Text style={styles.time}>{getTimeDifference(post_timestamp)} days ago</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 10
  },
  postRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  username: {
    fontWeight: 'bold',
    alignSelf: 'center',
    marginRight: 10
  },
  rowLeftSection: {
    flexDirection: 'row'
  },
  post: {
    height: windowWidth - 40,
    width: windowWidth
  },
  iconMargin: {
    marginRight: 20
  },
  descriptionRow: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 0,
    flexWrap:'wrap'
  },
  descriptionUsername: {
    fontWeight: 'bold',
    marginRight: 10
  },
  descriptionText: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  time: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 12,
    color: 'gray'
  },
  latestPostTextStyle: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  redDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: 'red',
    alignSelf: 'center',
    marginRight: 5
  }
});