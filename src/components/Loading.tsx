import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View className="h-16 justify-center items-center">
      <ActivityIndicator size="small" color="#334ffa" />
    </View>
  );
};

export default Loading;
