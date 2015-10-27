const en = {
  home: {
    title: 'Home',
    heading: 'Welcome!',
    getStarted: 'To get started, edit index.js',
    devTools: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  },
  todos: {
    title: 'Todos',
    todoHeader: {
      numberLeft: `{size, plural,
        =0 {Nothing, enjoy}
        one {You are almost done}
        other {You have {size} tasks to go}
      }`
    },
    list: {
      empty: 'No todos here',
      buttons: {
        clearCompleted: 'Clear completed',
        completeAll: 'Complete all'
      }
    },
    newTodo: {
      placeholder: 'Add new todo'
    }
  }
};

export default en;
