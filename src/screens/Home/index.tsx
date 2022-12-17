import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Movement} from '../../interfaces/Movement';
import {RootNavigationProps} from '../../navigation/RootNavigation';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from './components/Card';
import Section from '../../components/Section';
import MovementsList from './components/MovementsList';
import useMovements from '../../hooks/useMovements';

const Home = () => {
  const nav = useNavigation<NativeStackNavigationProp<RootNavigationProps>>();
  const {loading, movements, total, filter, selectFilter, FilterType} =
    useMovements();

  const onMovementPress = (item: Movement) =>
    nav.navigate('Detail', {data: item});

  const onShowWonMovements = () => selectFilter(FilterType.Won);
  const onShowTradedMovements = () => selectFilter(FilterType.Traded);
  const onShowAllMovements = () => selectFilter(FilterType.All);

  return (
    <SafeAreaView className="flex-1 bg-light-gray">
      <Header title="Bienvenido de vuelta!" subtitle="Ruben Rodriguez" />

      <Section title="Tus puntos" loading={loading}>
        <Card title="Diciembre" subtitle={`${total} pts`} />
      </Section>

      <Section title="Tus movimientos" loading={loading}>
        <MovementsList data={movements} onMovementPress={onMovementPress} />
      </Section>

      <View className="flex-row px-2 justify-center my-4">
        {filter === FilterType.All ? (
          <>
            <Button title="Ganados" onPress={onShowWonMovements} />
            <Button title="Canjeados" onPress={onShowTradedMovements} />
          </>
        ) : (
          <Button title="Todos" onPress={onShowAllMovements} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
