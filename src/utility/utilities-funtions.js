import { Dimensions } from 'react-native';

export const calcWidth = (size) => size * Dimensions.get('window').width;
export const calcHeight = (size) => size * Dimensions.get('window').height;
