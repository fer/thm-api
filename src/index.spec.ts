import { ThmApi } from './index'

const userId = '0day';
const countryCode = 'us';

const fakeRoomName = '1234asdf'
const realRoomName = 'fileinc'

describe('Testing ThmApi', () => {
  const api = new ThmApi();

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

  it(`getSeries should return an Array`, () => 
    api.getSeries((series)=> expect(Array.isArray(series)).toBeTruthy())
  )

  it(`getter countryList should return an object { countryCode: countryName}`, () => {
    expect(api.countryList['']).toBe('Worldwide')
    expect(api.countryList['ES']).toBe('Spain')
  })

  it(`getRoomVotes should return an object with 'upvotes' and 'uservVote' keys `, () => 
    api.getRoomVotes(realRoomName, (data) => 
      expect(Reflect.has(data, 'upvotes') && Reflect.has(data, 'upvotes')).toBeTruthy())
  )

  // it.only(`getRoomDetails throws an error when`, async () => {
  //   try {
  //     await api.getRoomDetails(realRoomName, (data) => {
  //       console.log(data)
  //     })      
  //   } catch(e) {
  //     // console.log('>>>>', e)
  //     expect(true).toBeTruthy()
  //   }    
  // })

})