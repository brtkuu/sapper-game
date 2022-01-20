<template>
  <div class="minesweeper-cell" :class="getClass()">
    <div v-if="cell.isOpen && cell.bombCount">
      {{ cell.bombCount }}
    </div>
    <div v-if="cell.hasFlag">
      &#9873;
    </div>
  </div>
</template>

<script>
export default {
  name: 'minesweeper-cell',
  props: {
    cell: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getClass() {
      const { cell } = this;
      if (cell.isOpen && cell.hasBomb) {
        return 'minesweeper-bomb';
      }
      if (cell.isOpen) {
        return 'minesweeper-open';
      }
      if (cell.hasFlag) {
        return 'minesweeper-flag';
      }
      return '';
    },
  },
};
</script>
