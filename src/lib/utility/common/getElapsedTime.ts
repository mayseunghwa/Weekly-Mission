const getElapsedTime = (dateItem: string): string => {
  if (dateItem) {
    const createdDate = new Date(dateItem)
    const nowDate = new Date()
    const timeDiff = nowDate.getTime() - createdDate.getTime()

    const MS_PER_MINUTE = 1000 * 60
    const MS_PER_HOUR = MS_PER_MINUTE * 60
    const MS_PER_DAY = MS_PER_HOUR * 24
    const MS_PER_MONTH = MS_PER_DAY * 30
    const MS_PER_YEAR = MS_PER_DAY * 365

    const timeUnits = [
      { value: MS_PER_YEAR, label: 'year' },
      { value: MS_PER_MONTH, label: 'month' },
      { value: MS_PER_DAY, label: 'day' },
      { value: MS_PER_HOUR, label: 'hour' },
      { value: MS_PER_MINUTE, label: 'minute' },
    ]

    for (let i = 0; i < timeUnits.length; i += 1) {
      const { value, label } = timeUnits[i]

      if (timeDiff >= value) {
        const formattedTimeDiff = Math.floor(timeDiff / value)
        return `${formattedTimeDiff} ${label}${formattedTimeDiff > 1 ? 's' : ''} ago`
      }
    }
  }
  return ''
}

export default getElapsedTime