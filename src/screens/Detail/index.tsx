import React, {useEffect, useState} from 'react';
import {Image, ScrollView, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootNavigationProps} from '../../navigation/RootNavigation';
import {Movement} from '../../interfaces/Movement';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/Button';
import DetailHeader from './components/DetailHeader';
import placeholderImage from '../../assets/images/placeholder.png';
import SectionDetail from './components/SectionDetail';

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

        <SectionDetail
          label="Detalles del producto"
          description={`Comprado el ${item.createdAt}`}
        />
        <SectionDetail
          label="Con esta compra acumulaste:"
          description={`${item.amountText} puntos`}
          descriptionSize="large"
        />
      </ScrollView>

      <View className="px-4">
        <Button title="Aceptar" onPress={onAcceptancePress} />
      </View>
    </SafeAreaView>
  );
};

export default Detail;
