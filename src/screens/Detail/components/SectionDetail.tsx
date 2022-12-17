import {View, Text} from 'react-native';
import React from 'react';

type SectionDetailProps = {
  label: string;
  description: string;
  descriptionSize?: 'normal' | 'large';
};

const SectionDetail = ({
  description,
  descriptionSize,
  label = 'normal',
}: SectionDetailProps) => {
  return (
    <View className="mt-4">
      <Text className="text-sm text-mid-gray font-bold">{label}</Text>
      <Text
        className={`font-bold mt-2 ${
          descriptionSize === 'large' ? 'text-2xl' : 'text-base'
        }`}>
        {description}
      </Text>
    </View>
  );
};

export default SectionDetail;
