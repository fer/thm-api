[![npm version](https://badge.fury.io/js/thm-api.svg)](https://badge.fury.io/js/thm-api)

# ThmApi

Unofficial TryHackMe Node.js/TypeScript library.

## Install

```bash 
npm i --save-dev thm-api
```

## Usage

```typescript
import { API, countryEnum } from 'thm-api'
const api = new API()

api.getLeaderboard('0day', 'US', (rank: number) => {
  console.log(rank)
})
```

## Constructors

### constructor

• **new ThmApi**()

## Accessors

### countryList

• `get` **countryList**(): `Object`

Returns an object with country code/name pairs.

**`readonly`**

**`memberof`** ThmApi

#### Returns

`Object`

## Methods

### checkIfUsernameExists

▸ **checkIfUsernameExists**(`username`, `callback`): `void`

Checks for existence of an user.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | TryHackMe username |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### getLeaderboard

▸ **getLeaderboard**(`username`, `countryCode`, `callback`): `void`

Gets rank for an user in a country if provided.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | TryHackMe username |
| `countryCode` | `string` | Country code |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### getNewRooms

▸ **getNewRooms**(`callback`): `void`

Get a list with the newest released TryHackMe rooms.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### getRoomDetails

▸ **getRoomDetails**(`roomName`, `callback`): `void`

Get room details.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roomName` | `string` | TryHackMe roomname |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### getRoomVotes

▸ **getRoomVotes**(`roomName`, `callback`): `void`

Get votes for a given room name.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `roomName` | `string` | TryHackMe roomname |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### getSeries

▸ **getSeries**(`callback`): `void`

Get learning paths.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | `Function` | Data callback function |

#### Returns

`void`

___

### searchUsername

▸ **searchUsername**(`username`, `callback`): `void`

Searches for similar usernames.
Used to invite users in the platform.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `username` | `string` | TryHackMe username |
| `callback` | `Function` | Data callback function |

#### Returns

`void`
