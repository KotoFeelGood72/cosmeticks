<template>
  <Icon :icon="localIcon" :width="localWidth" :height="localHeight" :color="localColor" />
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  components: {
    Icon
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: '24'
    },
    height: {
      type: [Number, String],
      default: '24'
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    localIcon() { return this.icon; },
    localWidth() { return this.width; },
    localHeight() { return this.height; },
    localColor() { return this.color; }
  }
}
</script>
