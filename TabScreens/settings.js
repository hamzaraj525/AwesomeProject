import React, {Component} from 'react';

import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import Header from './../Header';

export default class settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: [
        {key: '0', id: 101, name: 'LED', price: 9},
        {key: '1', id: 102, name: 'Mobile', price: 3},
        {key: '2', id: 103, name: 'Bike', price: 20},
        {key: '3', id: 104, name: 'Charger', price: 2},
        {key: '4', id: 105, name: 'Laptop', price: 50},
        {id: 106, name: 'LED', price: 9},
        {id: 107, name: 'Mobile', price: 3},
        {id: 108, name: 'Bike', price: 20},
        {id: 109, name: 'Charger', price: 2},
        {id: 110, name: 'Laptop', price: 50},
        {id: 111, name: 'LED', price: 9},
        {id: 112, name: 'Mobile', price: 3},
        {id: 113, name: 'Bike', price: 20},
        {id: 114, name: 'Charger', price: 2},
        {id: 115, name: 'Laptop', price: 50},
        {id: 116, name: 'LED', price: 9},
        {id: 117, name: 'Mobile', price: 3},
        {id: 118, name: 'Bike', price: 20},
        {id: 119, name: 'Charger', price: 2},
        {id: 120, name: 'Laptop', price: 50},
      ],
    };
  }

  onDel = id => {
    const {stock} = this.state;
    let filterArray = stock.filter((val, i) => {
      if (val.id !== id) {
        return val;
      }
    });
    this.setState({stock: filterArray});
  };
  onPriceCheck = price => {
    const {stock} = this.state;
    let filterArray = stock.filter((val, i) => {
      if (val.price < 5) {
        return val;
      }
    });
    this.setState({stock: filterArray});
  };
  onTenPercents = () => {
    const {stock} = this.state;
    var newNum = (this.state.stock / 100) * 10;
    let filterArray = stock.filter((val, i) => {
      if (val.price !== newNum) {
        return val;
      }
    });
    this.setState({stock: filterArray});
  };

  render() {
    const {stock} = this.state;

    return (
      <View>
        <Header />
        <View>
          <Text style={styles.store}>Products</Text>

          <TouchableOpacity
            style={{
              width: '33%',
              justifyContent: 'center',
              marginTop: 15,
              height: '5%',
              backgroundColor: 'orange',
              alignItems: 'center',
            }}
            onPress={() => this.onPriceCheck(stock.price)}>
            <Text>Filter less than 5</Text>
          </TouchableOpacity>

          <SwipeListView
            data={stock}
            renderItem={({item}) => (
              <View style={styles.container}>
                <TouchableOpacity onPress={item => alert('Pressed')}>
                  <View style={styles.flatListStyle}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text> {item.id} </Text>
                      <Text> {item.name} </Text>
                      <Text> {item.price} </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}
            renderHiddenItem={(data, rowMap) => (
              <View style={styles.btnHide}>
                <TouchableOpacity
                  style={styles.del}
                  onPress={() => this.onDel(data.id)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            leftOpenValue={75}
            rightOpenValue={-75}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  del: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    borderRadius: 4,
    height: '99%',
    backgroundColor: '#FF1493',
  },

  header: {
    backgroundColor: 'blue',
  },
  icon: {
    width: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    flex: 1,
    padding: 11,
  },
  flatListStyle: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 8,
    marginBottom: 17,
    alignItems: 'center',
    borderRadius: 4,
    flexDirection: 'row',
  },
  btnHide: {
    padding: 12,
    flexDirection: 'row',
  },
  store: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  loginText: {
    alignItems: 'center',
  },
  lottie: {
    width: 200,
    height: 200,
  },
  header: {
    backgroundColor: '#1f8e46',
  },
  icon: {
    width: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
