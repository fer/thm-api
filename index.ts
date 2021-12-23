import axios, { AxiosError, AxiosResponse } from 'axios'

import { CountryEnum } from './lib/country.enum'

export const countryEnum = CountryEnum;

/**
 * ThmApi constructor. Create an instance to work with TryHackMe public API.
 *
 * ```js
 * let api = new ThmApi();
 * ```
 * @name ThmApi
 * @api public
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

  private countryCodeExists = (code: string): boolean => code in CountryEnum

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
   * @name getLeaderboard
   * 
   * @param  {string} username
   * @param  {string} countryCode
   * @param  {Function} callback
   */
  public getLeaderboard(username: string, countryCode: string, callback: Function) {
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
   * @name searchUsername
   * 
   * @param  {string} str
   * @param  {Function} callback
   */
  public searchUsername = (str: string, callback: Function) =>
    axios.get(this.api_similar_users + str)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.searchUsername with '${str}' threw an error! \n${err}`)
      })

  /**
   * @name checkIfUsernameExists
   * 
   * @param  {string} username
   * @param  {Function} callback
   */
  public checkIfUsernameExists = (username: string, callback: Function) =>
    axios.get(this.api_user_url + username)
      .then(() => callback(true))
      .catch(() => callback(false))
  
  /**
   * @name getNewRooms
   * 
   * @param  {} callback
   */
  public getNewRooms = (callback) =>
    axios.get(this.api_new_rooms)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getNewRooms threw an error! \n${err}`)
      })
      
  /**
   * @name getSeries
   * 
   * @param  {} callback
   */
  public getSeries = (callback) =>
    axios.get(this.api_series)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getSeries threw an error! \n${err}`)
      })
  
  /**
   * @name getRoomDetails
   * 
   * @param  {string} str
   * @param  {} callback
   */
  public getRoomDetails = (str: string, callback) =>
    axios.get(this.api_room_details + str)
      .then((resp: AxiosResponse) => {
        if (resp.data[str].success)
          callback(resp.data[str])
        else
          throw new Error(`API.getRoomDetails: '${str}' does not exist!`)
      })
      .catch((err: AxiosError) => {
        throw new Error(`API.getRoomDetails threw an error! \n${err}`)
      })

      
  /**
   * @name getRoomVotes
   * 
   * @param  {string} str
   * @param  {} callback
   */
  public getRoomVotes = (str: string, callback) =>
    axios.get(this.api_room_votes + str)
      .then((resp: AxiosResponse) => callback(resp.data))
      .catch((err: AxiosError) => {
        throw new Error(`API.getSeries threw an error! \n${err}`)
      })
}