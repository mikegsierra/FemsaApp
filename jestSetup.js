jest.useFakeTimers();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({
      params: {
        id: '123',
      },
    }),
  };
});

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
