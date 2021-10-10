import React, {Component} from 'react';
import {
  Appbar,
  DarkTheme as PaperDarkTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

import {
  View,
  StatusBar,
  Modal,
  StyleSheet,
  Text,
  Button,
  SectionList,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];
const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class BottomSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      ShowComment: false,
      animateModal: false,
    };
  }

  render() {
    const {count} = this.state;
    return (
      <PaperProvider theme={PaperDarkTheme}>
        <View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.setState({ShowComment: true})}
              style={styles.loginBtn}>
              <Text>Filter less than 5</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.setState({count: this.state.count + 1})}
              style={styles.loginBtn}>
              <Text>counter</Text>
            </TouchableOpacity>
            <Text>{count}</Text>
          </View>
          <View>
            <SwipeUpDownModal
              modalVisible={this.state.ShowComment}
              PressToanimate={this.state.animateModal}
              //if you don't pass HeaderContent you should pass marginTop in view of ContentModel to Make modal swipeable
              ContentModalStyle={styles.Modal}
              ContentModal={
                <View>
                  <View style={styles.containerContent}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          ShowComment: false,
                          animateModal: false,
                        })
                      }
                      style={styles.modalInnerBtn}></TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('settings')}
                      style={styles.loginBtn}>
                      <Text>navigate</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              }
              onClose={() => {
                this.setState({ShowComment: false});
                this.setState({animateModal: false});
              }}
            />
          </View>
        </View>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 3,
  },
  tinyLogo: {
    tintColor: '#1f8e46',
    width: '30%',
    height: '255%',
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 21,
  },
  store: {
    fontSize: 32,
    backgroundColor: '#1f8e46',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  modalInnerBtn: {
    width: '10%',
    borderRadius: 25,
    height: '22%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '3%',
    backgroundColor: '#FF1493',
  },
  containerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Modal: {
    borderTopLeftRadius: 54,
    borderTopRightRadius: 54,
    marginTop: '120%',
    backgroundColor: 'orange',
  },
});
