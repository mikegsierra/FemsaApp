import {View, Text} from 'react-native';
import React from 'react';
import Loading from './Loading';

type SectionProps = {
  title: string;
  loading?: boolean;
  children: React.ReactNode;
};

const Section = ({title, children, loading}: SectionProps) => {
  return (
    <View className="pb-4 px-4">
      <Text className="uppercase text-base text-mid-gray font-bold mb-4">
        {title}
      </Text>
      <View>{loading ? <Loading /> : children}</View>
    </View>
  );
};

export default Section;
