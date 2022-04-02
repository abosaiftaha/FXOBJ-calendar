import { Dimensions } from "react-native";

export const { height, width } = Dimensions.get('window');

export const SMALL_DEVICE_HEIGHT: number = 750;
export const isTallDevice: boolean = height > SMALL_DEVICE_HEIGHT;
export const STORY_WIDTH = (width - 10) / 5.5;

const formattedDate = 'HH:mm:ss A';

