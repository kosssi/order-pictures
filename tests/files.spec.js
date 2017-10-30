import { searchPictures, moveFileToFolder } from '../src/files'
import { getDirName } from '../src/pictures'

describe('files', () => {

  const dirExample = './tests/myPictures'

  it('return picture files', async () => {
    const pictures = await searchPictures(dirExample)
    expect(pictures.length).toBe(8)
  })

  it('get exif', async () => {
    const pictures = await searchPictures(dirExample)

    for (const picture of pictures) {
      const dirName = await getDirName(picture)
      moveFileToFolder(picture, `./tests/${dirName}`)
    }
  })

})
