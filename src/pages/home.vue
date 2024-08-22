<template>
  <Form />
  <List />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export default {
  components: { Form, List },
  computed: {
    notes() {
      return this.$store.getters.getNotes
    },
  },
  mounted() {
    getLocalStorage('notes')
  },
  watch: {
    notes: {
      handler(updatedList) {
        setLocalStorage('notes', updatedList)
      },
      deep: true
    }
  },
}
</script>
