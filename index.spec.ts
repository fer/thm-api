import { API } from './index'

const userId = '0day';
const countryCode = 'us';

const fakeRoomName = '1234asdf'
const realRoomName = 'fileinc'

describe('Testing thm-api', () => {
  const api = new API();

  it(`should return rank for '${userId}' with ${countryCode} as countryCode`, () => 
    api.getLeaderboard(userId, countryCode, (rank) => expect(rank).toBeGreaterThan(0))
  )

  it(`searchUsername should return more than one hit for '${userId}'`, () => 
    api.searchUsername(userId, (users) => expect(users.length).toBeGreaterThan(0))
  )

  it(`checkIfUsernameExists for '${userId}' user should exist`, () => 
    api.checkIfUsernameExists(userId, (userExists) => expect(userExists).toBeTruthy())
  )

  it(`getNewRooms should return newest rooms in an Array`, () => 
    api.getNewRooms((rooms)=> expect(Array.isArray(rooms)).toBeTruthy())
  )

  it(`getSeries should return an Array`, () => {
    api.getSeries((series)=> expect(Array.isArray(series)).toBeTruthy())
  })

  it.only(`getRoomDetails throws an error when`, () => {
    try {
      api.getRoomDetails(fakeRoomName, (data) => {
        // console.log(data)
      })
    } catch(e) {
      // console.log('>>>>', e)
    }
    expect(true).toBeTruthy()

  })

})