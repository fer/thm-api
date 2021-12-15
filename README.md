# thm-api

Unofficial TryHackMe Node.js/TypeScript library.

> **Work in progress**: feel free to contribute with your PR.

## Install

```bash 
npm i --save-dev thm-api
```

## Use

```typescript
import { API, countryEnum } from 'thm-api'

const api = new API()
const username = 'fer'
const countryCode = 'es'

api.getLeaderboard(username, countryCode, (rank: number) => {
    console.log(rank)
})
```