import {StyleSheet} from 'react-native';

// View styles
const style = StyleSheet.create({

  // Centered content
  centered: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  // Horizontal direction of elements
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  // Vertical direction of elements
  vertical: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },

  // Basic container, no effects
  container: {
    flex: 1
  },

  // Container for sectionHeader
  sectionHeader: {
    alignItems: 'center',
    backgroundColor: '#333333',
    justifyContent: 'center',
    paddingBottom: 5,
    paddingTop: 5
  }
});

export default style;
