<template>
  <div class="datePicker" @mousedown.prevent>
    <div class="header">
      <button @click="prevMonth">prev</button>
      {{ currentMonth.start ? currentMonth.start.format('MMM YYYY') : '' }}
      <button @click="nextMonth">next</button>
    </div>
    <div>
      <div class="daysOfWeek">
        <span v-for="(day, index) in daysOfWeek" :key="index">{{ day }}</span>
      </div>
      <div class="daysOfMonth">
        <span 
          v-for="(day, index) in daysOfMonth" 
          :key="index"
          :class="{ isNotCurrentMonth: isNotCurrentMonth(day) }"
          @click="selectDay(day)"  
        >{{ day.format('DD') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Month from './Month.js'
import moment from 'moment'

export default {
  mounted () {
    const now = moment()
    const month = now.format('M') - 1
    const year = now.format('YYYY')
    this.currentMonth = new Month(month, year)
  },
  data () {
    return {
      daysOfWeek: [ 'D', 'L', 'M', 'M', 'J', 'V', 'S'],
      currentMonth: ''
    }
  },
  methods: {
    isNotCurrentMonth (day) {
      return !day.isSame(this.currentMonth.start, 'month')
    },
    prevMonth () {
      let newMonthNumber = this.currentMonth.start.format('M') - 2
      let year = parseInt(this.currentMonth.start.format('YYYY'))
      if (newMonthNumber < 0) {
        newMonthNumber = 11
        year = year - 1
      }
      this.currentMonth = new Month(newMonthNumber, year)
    },
    nextMonth () {
      let newMonthNumber = this.currentMonth.start.format('M')
      let year = parseInt(this.currentMonth.start.format('YYYY'))
      console.log({ newMonthNumber, year })
      if (parseInt(newMonthNumber) === 12) {
        newMonthNumber = 0
        year = year + 1
      }
      this.currentMonth = new Month(newMonthNumber, year)
    },
    selectDay (day) {
      this.$emit('selectDay', { selectedDay: day })
    }
  },
  computed: {
    daysOfMonth () {
      if (!this.currentMonth) return []
      return this.currentMonth.getDays()
    }
  }
}
</script>

<style scoped>
.datePicker {
  width: 350px;
  position: absolute;
}

.daysOfMonth, .daysOfWeek {
  max-width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.daysOfMonth span, .daysOfWeek span {
  width: 50px;
  text-align: center;
  line-height: 30px;
}
.isNotCurrentMonth {
  color: grey;
}
</style>
