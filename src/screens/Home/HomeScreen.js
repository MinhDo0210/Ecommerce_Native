import React, {useState} from 'react';
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Font5 from 'react-native-vector-icons/FontAwesome5';

import {images, metrics} from '../../assets';
import Product from './Product';

export default function HomeScreen({navigation}) {
  const [product, setProduct] = useState(Product);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={{
            width: metrics.Width / 5.5, 
            height: '100%',
          }}
        >
          <Image style={{width: metrics.Width / 5.7, height: metrics.Height * 0.075,}} source={images.LogoLeft}/>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', width: metrics.Width * 0.4, paddingTop: '3%'}}>
          <TouchableOpacity style={styles.touch}>
            <Icon name='cart-outline' color={'black'} size={metrics.Width * 0.1}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touch}>
            <Icon name='ios-menu-sharp' color={'black'} size={metrics.Width * 0.1}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bar}>
        <View style={styles.search}> 
          <Icon name='search-outline' color={'black'} size={metrics.Width * 0.1} style={{paddingTop: 15,}}/>
          <TextInput
            style={{
              width: metrics.Width * 0.8,
              borderBottomColor: 'black',
              borderBottomWidth: metrics.Width * 0.005,
            }}
            placeholder='living room'
          />
        </View>
        <View style={styles.filter}>
          <TouchableOpacity style={styles.btnFilter}>
            <Text style={styles.txt}>Best match</Text>
            <Entypo name='chevron-thin-down' color={'black'} size={metrics.Width * 0.05}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFilter}>
            <Text style={styles.txt}>Filters</Text>
            <Entypo name='chevron-thin-down' color={'black'} size={metrics.Width * 0.05}/>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <ScrollView>
          {product.map((item) => (
            <View key={item.id} style={styles.product}>
              <Image source={item.image} style={styles.imgProduct}/>
              <View style={styles.info}>
                <Text style={styles.txtNamePro}>{item.name}</Text>
                <Text style={styles.txtThumbnail}>{item.thumbnail}</Text>
              </View>
              <View style={styles.price}>
                <Text style={styles.txtPrice}>${item.price}</Text>
                <TouchableOpacity style={{paddingTop: 15}}>
                  <Font5 name='cart-plus' color={'black'} size={25}/>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bar: {
    padding: 10,
  },
  content: {
    flex: 1
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touch: {
    width: metrics.Width * 0.1, 
    height: metrics.Height * 0.05, 
    alignItems: 'center',
  },
  filter: {
    padding: 10,
    paddingTop: 20,
  },
  btnFilter: {
    height: metrics.Height * 0.045,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#F2F2F2',
    borderBottomWidth: 1,
  },
  txt: {
    color: '#22232B',
    fontSize: 14,
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
