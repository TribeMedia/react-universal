const pl = {
  home: {
    title: 'Strona główna',
    heading: 'Witaj!',
    getStarted: 'Aby zacząć, edytuj index.js',
    devTools: 'Przyciśnij Cmd+R by przeładować,\nCmd+D lub wstrząśnij aby otworzyć dev menu',
  },
  todos: {
    title: 'Todos',
    todoHeader: {
      numberLeft: `{size, plural,
        =0 {Brak zadań na dziś, wow}
        one {Prawie gotowe}
        <5 {Masz jeszcze {size} zadania}
        other {Masz jeszcze {size} zadań}
      }`
    },
    list: {
      empty: 'Brak zadań',
      buttons: {
        clearCompleted: 'Wyczyść skończone',
        completeAll: 'Wyczyść wszystko'
      }
    },
    newTodo: {
      placeholder: 'Dodaj nowe zadanie'
    }
  }
};

export default pl;
