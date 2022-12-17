import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View} from 'react-native';
import {Movement} from '../../interfaces/Movement';
import {RootNavigationProps} from '../../navigation/RootNavigation';
import {MovementService} from '../../services/MovementService';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Card from './components/Card';
import Section from '../../components/Section';
import MovementsList from './components/MovementsList';

enum FilterType {
  All,
  Won,
  Traded,
}

const Home = () => {
  const nav = useNavigation<NativeStackNavigationProp<RootNavigationProps>>();
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [movementsFiltered, setMovementsFiltered] = useState<Movement[]>([]);
  const [total, setTotal] = useState('');

  const onMovementPress = (item: Movement) => {
    console.log('Item', item);
    nav.navigate('Detail', {data: item});
  };

  const loadMovementes = async () => {
    setLoading(true);
    try {
      const service = new MovementService();
      const data = await service.getAllMovements();

      setMovements(data);
    } catch (error) {
      console.log('LoadMovementesError', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovementes();
  }, []);

  useEffect(() => {
    if (filter === FilterType.Won) {
      setMovementsFiltered(() => movements.filter(move => move.isPositive));
    } else if (filter === FilterType.Traded) {
      setMovementsFiltered(() => movements.filter(move => !move.isPositive));
    } else {
      setMovementsFiltered(movements);
    }
  }, [movements, filter]);

  useEffect(() => {
    const totalPoints = movementsFiltered.reduce<number>((accumulator, obj) => {
      return accumulator + obj.amount;
    }, 0);
    setTotal(totalPoints.toLocaleString('en-US'));
  }, [movementsFiltered]);

  const onShowWonMovements = () => setFilter(FilterType.Won);
  const onShowTradedMovements = () => setFilter(FilterType.Traded);
  const onShowAllMovements = () => setFilter(FilterType.All);

  return (
    <SafeAreaView className="flex-1 bg-light-gray">
      <Header title="Bienvenido de vuelta!" subtitle="Ruben Rodriguez" />

      <Section title="Tus puntos" loading={loading}>
        <Card title="Diciembre" subtitle={`${total} pts`} />
      </Section>

      <Section title="Tus movimientos" loading={loading}>
        <MovementsList
          data={movementsFiltered}
          onMovementPress={onMovementPress}
        />
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
