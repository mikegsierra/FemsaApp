import {View, Text} from 'react-native';
import React from 'react';

type CardProps = {
  title: string;
  subtitle: string;
};

const Card = ({title, subtitle}: CardProps) => {
  return (
    <View className="bg-primary mx-5 rounded-2xl px-10 py-14 shadow-lg justify-center items-center">
      <Text className="text-white text-lg font-bold absolute top-4 left-4">
        {title}
      </Text>
      <Text className="text-white text-3xl font-bold">{subtitle}</Text>
    </View>
  );
};

export default Card;
