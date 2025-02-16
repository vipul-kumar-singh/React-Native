import { TextInput, View, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: '#72063c',
    elevation: 4, // android-only property
    shadowColor: 'black', // ios-only property
    shadowOffset: { width: 0, height: 2 }, // ios-only property
    shadowRadius: 6, // ios-only property
    shadowOpacity: 0.25, // ios-only property
  },
});

export default StartGameScreen;
