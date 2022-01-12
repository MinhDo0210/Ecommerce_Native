import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import {useSelector} from 'react-redux';

import Font5 from 'react-native-vector-icons/FontAwesome5';

import {metrics} from '../../assets';

export default function Cart() {
  const productList = useSelector((store) => store.cartReducer.products);
  return (
    <ScrollView style={styles.container}>
      {productList.map((item) => (
        <View key={item.id} style={styles.product}>
          <Image source={item.image} style={styles.imgProduct}/>
          <View style={styles.info}>
            <Text style={styles.txtNamePro}>{item.name}</Text>
            <Text style={styles.txtThumbnail}>{item.thumbnail}</Text>
          </View>
          <View style={styles.price}>
            <Text style={styles.txtPrice}>${item.price}</Text>
            <TouchableOpacity 
              style={{paddingTop: 15}}
            >
              <Font5 name='cart-plus' color={'black'} size={25}/>
            </TouchableOpacity>
          </View>
        </View>
      ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  txtNamePro: {
    color: '#22232B',
    fontSize: 14,
  },
  txtThumbnail: {
    color: '#a9a9ac',
    fontSize: 12,
    textTransform: 'uppercase'
  },
  txtPrice: {
    color: '#22232B',
    fontSize: 14,
  },
  product: {
    padding: 20,
    height: metrics.Height * 0.45,
  },
  imgProduct: {
    width: metrics.Width * 0.9, 
  },
  info: {
    position: 'absolute', 
    bottom: 15, 
    left: 20, 
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'white', 
    height: metrics.Height * 0.13, 
    width: metrics.Width * 0.4,
  },
  price: {
    position: 'absolute', 
    bottom: 0, 
    right: 20, 
    backgroundColor: 'white', 
    width: metrics.Width * 0.5, 
    alignItems: 'flex-end',
    paddingTop: 10,
    flexDirection: 'column', 
    justifyContent: 'flex-start',
  },
});
