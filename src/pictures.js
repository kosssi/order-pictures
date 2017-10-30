import { ExifImage } from 'exif'
import format from 'date-fns/format'

export const getDirName = async picture => {
  const date = await getExifDate(picture)

  return format(date, 'YYYY_MM_DD')
}

export const getExifDate = async picture => {
  const exif = await getExif(picture)
  // 2017:07:04 20:16:57
  const [date, time] = exif.exif.CreateDate.split(' ')
  const [year, month, day] = date.split(':')
  const [hour, minute, second] = time.split(':')

  return new Date(year, month - 1, day, hour, minute, second)
}

export const getExif = async picture => new Promise((resolve, reject) => {
  try {
    new ExifImage({ image : picture }, function (err, exifData) {
      if (err) {
        reject(err)
      } else {
        resolve(exifData)
      }
    })
  } catch (err) {
    reject(err)
  }
})
