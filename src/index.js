import { searchPictures, moveFileToFolder } from '../src/files'
import { getDirName } from '../src/pictures'

const main = async folder => {
  const pictures = await searchPictures(folder)

  for (const picture of pictures) {
    const dirName = await getDirName(picture)
    moveFileToFolder(picture, `${folder}/${dirName}`)
  }
}

export default main
