import {useEffect, useState} from 'react';
import {Movement} from '../interfaces/Movement';
import {MovementService} from '../services/MovementService';

enum FilterType {
  All,
  Won,
  Redeemed,
}

const useMovements = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<FilterType>(FilterType.All);
  const [movements, setMovements] = useState<Movement[]>([]);
  const [movementsFiltered, setMovementsFiltered] = useState<Movement[]>([]);
  const [total, setTotal] = useState('');

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
    } else if (filter === FilterType.Redeemed) {
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

  return {
    movements: movementsFiltered,
    total,
    loading,
    filter,
    selectFilter: setFilter,
    FilterType,
  };
};

export default useMovements;
