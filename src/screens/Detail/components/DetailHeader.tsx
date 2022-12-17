import {View, Text} from 'react-native';
import React from 'react';

type DetailHeaderProps = {
  title: string;
};

const DetailHeader = ({title}: DetailHeaderProps) => {
  return (
    <View className="bg-secondary h-40 px-4 py-3 justify-end items-start">
      <Text numberOfLines={1} className="text-2xl font-bold">
        {title}
      </Text>
    </View>
  );
};

export default DetailHeader;
