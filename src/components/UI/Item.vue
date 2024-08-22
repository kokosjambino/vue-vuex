<template>
    <div
        class="tag-item"
        :key="item"
        @click="handleClick"
        :class="{ isPreview: isPreview, isActive: !isPreview && isActiveClass }"
        >
        <span>{{ item }}</span>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveClass: false
    }
  },
  methods: {
    handleClick() {
      this.isActiveClass = !this.isActiveClass
    },
  },
  props: {
    item: {
      type: String,
    },
    isPreview: {
      type: Boolean,
      default: false
    },
  }
}
</script>