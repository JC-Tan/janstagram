import { convertToJson } from './convertToJson'

describe('convertToJson', () => {
  test('formdata to json', () => {
    const res = convertToJson('test', '/testRoute')
    const stringRes = JSON.parse(res.get('json') as string)
    expect(stringRes).toEqual({
      _action: 'test',
      to: '/testRoute',
    })
  })
})
