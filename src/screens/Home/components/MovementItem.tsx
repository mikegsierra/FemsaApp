import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import placeholderImage from '../../../assets/images/placeholder.png';

type MovementItemProps = {
  index: number;
  description: string;
  dateAt: string;
  amount: string;
  imageUrl: string;
  isPositive: boolean;
  onPress: () => void;
};

const MovementItem = ({
  index,
  description,
  dateAt,
  amount,
  imageUrl,
  isPositive,
  onPress,
}: MovementItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} testID={`item-row-${index}`}>
      <View className="flex-row justify-between items-center py-2 px-2">
        <View className="w-14 h-14 bg-gray-700 rounded-lg">
          <Image
            source={{uri: imageUrl}}
            className="w-full h-full rounded-lg"
            defaultSource={placeholderImage}
            resizeMode="cover"
          />
        </View>
        <View className="flex-1 px-2">
          <Text
            numberOfLines={1}
            className="text-base font-bold text-black mb-2">
            {description}
          </Text>
          <Text numberOfLines={1} className="text-sm text-black">
            {dateAt}
          </Text>
        </View>
        <View className="flex-row items-center justify-end px-1">
          <Text
            className={`text-lg font-bold ${
              isPositive ? 'text-green-600' : 'text-red-600'
            }`}>
            +
          </Text>
          <Text className="text-base font-bold">{amount}</Text>
        </View>
        <View className="px-3">
          <Text className="text-lg font-bold">{'>'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovementItem;
