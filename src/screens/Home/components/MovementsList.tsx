import {FlatList} from 'react-native';
import React from 'react';
import MovementItem from './MovementItem';
import {Movement} from '../../../interfaces/Movement';

type MovementListProps = {
  data: Movement[];
  onMovementPress: (item: Movement) => void;
};

const MovementsList = ({data, onMovementPress}: MovementListProps) => {
  return (
    <FlatList
      className="bg-white rounded-xl h-80"
      data={data}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      renderItem={({item, index}) => (
        <MovementItem
          index={index}
          description={item.description}
          dateAt={item.createdAt}
          amount={item.amountText}
          imageUrl={item.imageUrl}
          isPositive={item.isPositive}
          onPress={() => onMovementPress(item)}
        />
      )}
    />
  );
};

export default MovementsList;
