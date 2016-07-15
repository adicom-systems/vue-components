const defaultFormat = 'YYYY-MM-DD'

export default {
  read: function (val, format) {
    const m = moment(val)
    return m.isValid() ? m.format(format || defaultFormat) : null
  },
  write: (val, old, format) => moment.utc(val, format || defaultFormat).toDate()
}