import axios, { AxiosError, AxiosResponse } from 'axios'
import { CountryEnum } from './lib/country.enum'

/**
 * Unofficial TryHackMe Node.js/TypeScript library.
 *
 * ## Install
 * 
 * ```bash 
 * npm i --save-dev thm-api
 * ```
 * 
 * ## Usage
 * 
 * ```typescript
 * import { API, countryEnum } from 'thm-api'
 * const api = new API()
 * 
 * api.getLeaderboard('0day', 'US', (rank: number) => {
 *   console.log(rank)
 * })
 * ```
 * 
 */

export class ThmApi {
  private baseUrl: string = 'https://tryhackme.com/'
  private api_url_user_rank: string = this.baseUrl + 'api/user/rank/'
  private api_url_leaderboard: string = this.baseUrl + 'api/leaderboards'
  private api_similar_users: string = this.baseUrl + 'api/similar-users/'
  private api_new_rooms: string = this.baseUrl + 'api/new-rooms'
  private api_series: string = this.baseUrl + 'api/series'
  private api_room_details: string = this.baseUrl + 'api/room/details?codes='
  private api_user_url: string = this.baseUrl + 'p/'
  private api_room_votes: string = this.baseUrl + 'api/room/votes?code='

  private countryCodeExists = (code: string): boolean => code in this.countryList

  private getUserRankOnCountryLeaderboard(countryCode: string, callback: Function) {
    const params = { params: { country: countryCode } }

    axios.get(this.api_url_leaderboard, params)
      .then((resp: AxiosResponse) => callback(resp.data.ranks))
      .catch((err: AxiosError) => {
        throw new Error(`API.getLeaderboard threw an error! \n${err}`)
      })
  }

  private getUserRankWorldWideLeaderboard(username: string, callback: Function): void {
    axios.get(this.api_url_user_rank + username)
      .then((resp: AxiosResponse) => callback(resp.data.userRank))
      .catch((err: AxiosError) => {
        throw new Error(`API.getUserRankWorldWideLeaderboard with username "${username}" threw an error! \n${err}`)
      })
  }

  /**
   * Returns an object with country code/name pairs.
   *
   * @readonly
   * @type {Object}
   * @memberof ThmApi
   */
  get countryList(): Object {
    return CountryEnum
  }

  /**
   * Gets rank for an user in a country if provided.
   * 
   * @param username TryHackMe username
   * @param countryCode Country code
   * @param callback Data callback function
   */
  public getLeaderboard(username: string, countryCode: string, callback: Function): void {
    if (countryCode === '') this.getUserRankWorldWideLeaderboard(username, callback)
    else {
      if (!this.countryCodeExists(countryCode.toUpperCase()))
        throw new Error(`API.getUserRankOnCountryLeaderboard -> countryCode "${countryCode}" does not exist!`)

      this.getUserRankOnCountryLeaderboard(countryCode.toLowerCase(), (data: any) => {
        let filteredUserObject = data.find((user: any) => user.username === username)

        callback(data.indexOf(filteredUserObject) + 1)
      })
    }
  }

  /**
   * Searches for similar usernames. 
   * Used to invite users in the platform.
   * 
   * @param username TryHackMe username
   * @param callback Data callback function
   */
  public searchUsername(username: string, callback: Function): void {
    axios.get(this.api_similar_users + username)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.searchUsername with '${username}' threw an error! \n${err}`)
      })
  }

  /**
   * Checks for existence of an user.
   * 
   * @param username TryHackMe username
   * @param callback Data callback function
   */
  public checkIfUsernameExists(username: string, callback: Function): void {
    axios.get(this.api_user_url + username)
      .then(() => callback(true))
      .catch(() => callback(false))
  }
  
  /**
   * Get a list with the newest released TryHackMe rooms.
   * 
   * @param callback Data callback function
   */
  public getNewRooms(callback: Function): void {
    axios.get(this.api_new_rooms)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getNewRooms threw an error! \n${err}`)
      })
  }
   
  /**
   * Get learning paths.
   * 
   * @param callback Data callback function
   */
  public getSeries(callback: Function): void {
    axios.get(this.api_series)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getSeries threw an error! \n${err}`)
      })
  }
  
  /**
   * Get room details.
   * 
   * @param roomName TryHackMe roomname
   * @param callback Data callback function
   */

  public getRoomDetails(roomName: string, callback: Function): void {
    axios.get(this.api_room_details + roomName)
      .then((resp: AxiosResponse) => {
        if (resp.data[roomName].success)
          callback(resp.data[roomName])
        else
          throw new Error(`API.getRoomDetails: '${roomName}' does not exist!`)
      })
      .catch((err: AxiosError) => {
        throw new Error(`API.getRoomDetails threw an error! \n${err}`)
      })
  }
  
  /**
   * Get votes for a given room name.
   * 
   * @param roomName TryHackMe roomname
   * @param callback Data callback function
   */
  public getRoomVotes(roomName: string, callback: Function): void {
    axios.get(this.api_room_votes + roomName)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getRoomVotes threw an error! \n${err}`)
      })
  } 
}