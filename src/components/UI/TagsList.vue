<template>
  <div class="tags-list" >
    <Item v-for="item in items" :item="item" :isPreview="isPreview" @click="$emit('onItemClick', item)"/>
  </div>
</template>

<script>
import Item from '@/components/UI/Item.vue'

export default {
  components: { Item },
  props: {
    items: {
      type: Array,
      reqired: true
    },
    isPreview: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss">
.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: '#';
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
