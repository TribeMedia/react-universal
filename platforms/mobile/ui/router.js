import React, {TouchableOpacity, Text} from 'react-native';
import Header from './components/Header';
import {text} from './styles';

const routes = {

  // Home route
  // Contains todos, see impl of containers/Home for details
  getHomeRoute() {
    return {
      getSceneClass: () => require('./containers/Home'),

      // We return true here so `renderTitle` gets called
      getTitle: () => true,

      // Let's render custom `Header` component to get translated title
      renderTitle: (route) => <Header title='home.title' />
    };
  },

  getTodosRoute() {
    return {
      getSceneClass: () => require('./containers/Todos'),

      // Todos page has its own title component
      getTitle: () => true,

      renderTitle: (route) => <Header title='todos.title' />,

      // Right button so we can visit Home
      renderRightButton: (navigator) =>
        <TouchableOpacity onPress={_ => navigator.push(routes.getHomeRoute())}>
          <Text style={text.navbar}>?</Text>
        </TouchableOpacity>

    };
  }

};

export default routes;
