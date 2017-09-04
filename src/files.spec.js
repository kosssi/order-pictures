import { getAboluteDir, searchFilesInDir } from './files'

describe('files', () => {
  it('return absolulte path', () => {
    expect(getAboluteDir('.')).toBe(__DIR__)
  })
  it('return picture files', () => {
    const dirName = 'test'
    expect(searchFilesInDir(dirName)).toBe(dirName)
  })
})
