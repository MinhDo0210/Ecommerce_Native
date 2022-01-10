import {Dimensions, Platform} from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  Width: width > height ? height : width,
  Height: width > height ? width : height,
  navBarHeight: Platform.OS === 'ios' ? '700' : '600',
};

export default metrics;