import axios, { AxiosError, AxiosResponse } from 'axios'

import { CountryEnum } from './lib/country.enum'

export const countryEnum = CountryEnum;

export class API {
    private baseUrl: string = 'https://tryhackme.com/'
    private api_url_user_rank: string = this.baseUrl + 'api/user/rank/'
    private api_url_leaderboard: string = this.baseUrl + 'api/leaderboards'
    private api_similar_users: string = this.baseUrl + 'api/similar-users/'
    private thm_user_url: string = this.baseUrl + 'p/' 

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

    public searchUsername(str: string, callback: Function) {        
        axios.get(this.api_similar_users + str)
            .then((resp: AxiosResponse) => callback(resp.data))
            .catch((err: AxiosError) => {
                throw new Error(`API.searchUsername with '${str}' threw an error! \n${err}`)
            })
    }

    public checkIfUsernameExists(username: string, callback: Function) {
        axios.get(this.thm_user_url + username)
            .then(() => callback(true))
            .catch(() => callback(false))
    }
}