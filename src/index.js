import { searchPictures, moveFileToFolder } from '../src/files'
import { getDirName } from '../src/pictures'

const main = async folder => {
  try {
    const pictures = await searchPictures(folder)

    for (const picture of pictures) {
      try {
        const dirName = await getDirName(picture)
        moveFileToFolder(picture, `${folder}/${dirName}`)
      } catch (e) {
        if (e.code === 'NOT_A_JPEG') {
          console.log(`/!\\ it's not a picture file: ${picture}`)
        }
      }
    }
  } catch (e) {
    if (e.code === 'ENOENT') {
      console.log('This folder does not exist.')
    } else {
      console.log(e)
    }
  }
}

export default main
