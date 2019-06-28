import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

export default class Month {
  constructor (month, year) {
    this.start = moment([ year, month ])
    const startClone = moment(this.start)
    
    this.end = startClone.endOf('month')
  }

  getDays () {
    const beginingOfWeek = moment(this.start).startOf('week')
    const endOfWeek = moment(this.end).endOf('week')

    const range = moment.range(beginingOfWeek, endOfWeek)
    return Array.from(range.by('days'))
  }
}