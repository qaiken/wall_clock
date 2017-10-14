function radiansToDegrees (radians) {

  var degrees = (radians * 180) / Math.PI
  return Number(degrees.toPrecision(12))
}

function clockAngle (time, type) {

  time = time || Date()
  type = type || 'degrees'

  var pi2 = Math.PI * 2
  var formattedTime = time.match(/(\d\d?):(\d\d)/)

  if (!formattedTime) {
    console.error('Please enter a time in digital format, e.g. "3:20" or "12:42"')
    return null
  }

  var mins = formattedTime[2]
  var hours = formattedTime[1]

  var minsRatio = Number(formattedTime[2]) / 60
  var hoursRatio = (Number(formattedTime[1]) + minsRatio) / 12

  var angle = Math.abs(hoursRatio - minsRatio) * pi2
  var angleAlt = Math.abs(pi2 - angle)
  var smallestAngle = Math.min(angle, angleAlt)

  console.log(`Time: ${hours}:${mins}`)

  if (type === 'radians') {
    console.log(`${smallestAngle} Radians`)
    return smallestAngle
  }

  var degrees = radiansToDegrees(smallestAngle)

  console.log(`${degrees} degrees`)
  return degrees
}

module.exports = clockAngle
