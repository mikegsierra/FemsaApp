import React, {useEffect, useState} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootNavigationProps} from '../../navigation/RootNavigation';
import {Movement} from '../../interfaces/Movement';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import DetailHeader from './components/DetailHeader';
import placeholderImage from '../../assets/images/placeholder.png';

const Detail = () => {
  const {params} = useRoute<RouteProp<RootNavigationProps>>();
  const nav = useNavigation();
  const [item, setItem] = useState<Movement>({} as Movement);

  useEffect(() => {
    if (params?.data) {
      setItem(params.data);
    }
  }, [params]);

  const onAcceptancePress = () => nav.goBack();

  return (
    <SafeAreaView className="flex-1" edges={['left', 'right', 'bottom']}>
      <DetailHeader title={item.description} />

      <ScrollView className="px-6">
        <View className="justify-center items-center py-4 rounded-lg shadow-2xl">
          <Image
            source={{uri: item.imageUrl}}
            className="w-80 h-80 rounded-lg"
            defaultSource={placeholderImage}
            resizeMode="cover"
          />
        </View>

        <View className="mt-4">
          <Text className="text-sm text-mid-gray font-bold">
            Detalles del producto
          </Text>
          <Text className="text-base font-bold mt-2">
            Comprado el 26 de enero, 2019
          </Text>
        </View>

        <View className="mt-4">
          <Text className="text-sm text-mid-gray font-bold">
            Con esta compra acumulaste:
          </Text>
          <Text className="text-2xl font-bold mt-2">100 puntos</Text>
        </View>
      </ScrollView>

      <View className="px-4">
        <Button title="Aceptar" onPress={onAcceptancePress} />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
