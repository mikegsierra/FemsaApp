/**
 * @format
 */

// import 'react-native';
import React from 'react';
import Home from '../src/screens/Home';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import {act} from 'react-test-renderer';

const movementsList = [
  {
    createdAt: '2022-12-09T06:34:25.607Z',
    product: 'Handmade Metal Shoes',
    points: 2,
    image: 'https://loremflickr.com/640/480/transport',
    is_redemption: false,
    id: '1',
  },
  {
    createdAt: '2022-12-09T17:02:51.904Z',
    product: 'Recycled Plastic Tuna',
    points: 3,
    image: 'https://loremflickr.com/640/480/technics',
    is_redemption: false,
    id: '2',
  },
  {
    createdAt: '2022-12-09T00:30:23.966Z',
    product: 'Fantastic Fresh Gloves',
    points: 1,
    image: 'https://loremflickr.com/640/480/city',
    is_redemption: true,
    id: '3',
  },
  {
    createdAt: '2022-12-08T18:54:56.243Z',
    product: 'Rustic Rubber Bacon',
    points: 2,
    image: 'https://loremflickr.com/640/480/people',
    is_redemption: true,
    id: '4',
  },
  {
    createdAt: '2022-12-09T14:12:11.097Z',
    product: 'Tasty Concrete Cheese',
    points: 3,
    image: 'https://loremflickr.com/640/480/business',
    is_redemption: false,
    id: '5',
  },
];

const total = movementsList.reduce<number>((accumulator, obj) => {
  return accumulator + obj.points;
}, 0);

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(movementsList),
  }),
) as jest.Mock;

describe('<Home/>', () => {
  // it('valid snapshot', () => {
  //   act(() => {
  //     tree = create(<Home />);
  //   });
  //   expect(tree).toMatchSnapshot();
  // });

  beforeEach(() => {
    render(<Home />);
  });

  test('should shows two buttons at inital state', async () => {
    // const {getByText} = root;
    const wonButton = await screen.findByText('Ganados');
    const redeemedButton = await screen.findByText('Canjeados');

    expect(wonButton).toBeDefined();
    expect(redeemedButton).toBeDefined();
  });

  test('should show a list of movements', async () => {
    const items = await screen.findAllByTestId(/item-row-[0-9]/);

    await waitFor(() => {
      expect(items.length).toEqual(movementsList.length);
    });
  });

  test('should filter the list and show only the POSITIVE ones', async () => {
    const wonButton = await screen.findByText('Ganados');

    fireEvent.press(wonButton);

    const items = await screen.findAllByTestId(/item-row-[0-9]/);

    const movementsFiltered = movementsList.filter(mov => mov.is_redemption);

    await waitFor(() => {
      expect(items.length).toEqual(movementsFiltered.length);
    });

    const allButton = await screen.findByText('Todos');
    expect(allButton).toBeDefined();
  });

  test('should filter the list and show only the NEGATIVE ones', async () => {
    const wonButton = await screen.findByText('Canjeados');

    fireEvent.press(wonButton);

    const items = await screen.findAllByTestId(/item-row-[0-9]/);

    const movementsFiltered = movementsList.filter(mov => !mov.is_redemption);

    await waitFor(() => {
      expect(items.length).toEqual(movementsFiltered.length);
    });

    const allButton = await screen.findByText('Todos');
    expect(allButton).toBeDefined();
  });

  test('should show a sum of total points', async () => {
    await act(async () => {
      await waitFor(() => {
        expect(screen.getByText(`${total} pts`)).toBeDefined();
      });
    });
  });

  test('should navigate to a Detail screen', async () => {
    await waitFor(() => {
      return screen.queryByTestId('item-row-2');
    });
    const rowItem = await screen.findByTestId('item-row-2');

    // await waitFor(() => expect(items.length).toEqual(movementsList.length));

    expect(rowItem).toBeDefined();

    fireEvent.press(rowItem);
  });
});
