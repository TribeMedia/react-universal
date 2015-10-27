import {StyleSheet} from 'react-native';

// Text styles
const style = StyleSheet.create({

  // Basic paragraph, mainly used on Home page
  paragraph: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },

  // Heading, as seen in the navbar
  heading: {
    fontSize: 20,
    textAlign: 'center'
  },

  // Clickable buttons
  button: {
    padding: 10,
    backgroundColor: '#F1F1F1'
  },

  // Section header used within lists or as a divider
  sectionHeader: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },

  navbar: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  }
});

export default style;
