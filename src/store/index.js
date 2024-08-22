import { createStore } from 'vuex'

export const store = createStore({
  state: {
    notes: [
      {
        title: 'Learn Vue 3',
        tags: ['work']
      },
      {
        title: 'Finish course',
        tags: ['work', 'home']
      }
    ],
    selectTags: []
  },
  mutations: {
    setNote(state, note) {
      const newNote = {
        title: note.value,
        tags: note.selectTags
      }
      state.notes.push(newNote)
    },
    getLocalField(state, notes) {
      state[notes.field] = notes.jsonToParse
    },
    removeNote(state, index) {
      state.notes.splice(index, 1)
    }
  },
  actions: {
    setNote(context, payload) {
      context.commit('setNote', payload)
    },
    getLocalField(context, payload) {
      context.commit('getLocalField', payload)
    },
    removeNote(context, payload) {
      context.commit('removeNote', payload)
    }
  },
  getters: {
    getNotes(state) {
      return state.notes
    }
  }
})
