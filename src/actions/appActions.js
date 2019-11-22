//  O ideal é que tenhamos um arquivo de ações para cada reducer.

export default {
  setText(text) {
    return { type: 'SET_TEXT', payload: text };
  }
};
