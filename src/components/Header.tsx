import {View, Text} from 'react-native';
import React from 'react';

type HeaderProps = {
  title: string;
  subtitle: string;
};

const Header = ({title, subtitle}: HeaderProps) => {
  return (
    <View className="flex-col px-4 py-4">
      <Text className="text-2xl font-bold text-black">{title}</Text>
      <Text className="text-lg text-black">{subtitle}</Text>
    </View>
  );
};

export default Header;
