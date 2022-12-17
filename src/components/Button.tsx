import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-primary px-10 py-4 rounded-xl flex-grow items-center justify-center mx-2">
      <Text className="text-white text-md font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
