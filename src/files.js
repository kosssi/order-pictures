import path from 'path'
import fs from 'fs'

const DEFAULT_CONFIG = {
  skip: {
    folders: [
      '.git',
      'node_modules'
    ],
    files: [
      '.DS_Store',
      '._.DS_Store',
      '._Odin3.ini'
    ]
  }
}

const skipFolders = (folderName, config) =>
  config.skip.folders.indexOf(folderName) === -1

const skipFiles = (fileName, config) =>
  config.skip.files.indexOf(fileName) === -1

export const searchPictures = async dir => {
  let files = []
  const fileNames = fs.readdirSync(dir)

  for (const fileName of fileNames) {
    const path = dir + '/' + fileName
    try {
      const stat = fs.statSync(path)

      if (stat) {
        if (stat.isDirectory() && skipFolders(fileName, DEFAULT_CONFIG)) {
          const dirFiles = await searchPictures(path)
          files = [ ...files, ...dirFiles ]
        } else if (stat && stat.isFile() && skipFiles(fileName, DEFAULT_CONFIG)) {
          files.push(path)
        }
      }
    } catch (e) {
      console.log(`Error with '${path}' file.`)
    }
  }

  return files
}

const createDirIfNotExist = dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

export const moveFileToFolder = async (oldPath, newPath) => {
  const fileName = path.basename(oldPath)
  await createDirIfNotExist(newPath)
  console.log(`- Move ${oldPath} in ${newPath}.`)
  fs.rename(oldPath, newPath + '/' + fileName)
}
