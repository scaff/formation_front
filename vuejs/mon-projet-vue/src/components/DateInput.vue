<template>
  <div>
    <input
      type="text"
      v-model="stringDate"
      @focus="showDatePicker"
      @blur="hideDatePicker"
    >
    <date-picker
      v-show="isDatePickerVisible"
      @selectDay="selectDay"
    ></date-picker>
  </div>
</template>

<script>
import DatePicker from './DatePicker'

export default {
  components: {
    DatePicker
  },
  props: [ 'format' ],
  data () {
    return {
      isDatePickerVisible: false,
      selectedDay: {}
    }
  },
  methods: {
    showDatePicker () {
      this.isDatePickerVisible = true
    },
    hideDatePicker (event) {
      console.log(event)
      this.isDatePickerVisible = false
    },
    selectDay ({ selectedDay }) {
      this.selectedDay = selectedDay
      this.$emit('input', selectedDay)
    }
  },
  computed: {
    stringDate () {
      if (!this.selectedDay || !this.selectedDay.format) return ''
      return this.selectedDay.format(this.format)
    }
  }
}
</script>
