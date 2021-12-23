[![npm version](https://badge.fury.io/js/thm-api.svg)](https://badge.fury.io/js/thm-api)
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="20" role="img" aria-label="Coverage:branches: 42.85%"><title>Coverage:branches: 42.85%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="170" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="117" height="20" fill="#555"/><rect x="117" width="53" height="20" fill="#e05d44"/><rect width="170" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="595" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1070">Coverage:branches</text><text x="595" y="140" transform="scale(.1)" fill="#fff" textLength="1070">Coverage:branches</text><text aria-hidden="true" x="1425" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">42.85%</text><text x="1425" y="140" transform="scale(.1)" fill="#fff" textLength="430">42.85%</text></g></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="170" height="20" role="img" aria-label="Coverage:functions: 35.48%"><title>Coverage:functions: 35.48%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="170" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="117" height="20" fill="#555"/><rect x="117" width="53" height="20" fill="#e05d44"/><rect width="170" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="595" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1070">Coverage:functions</text><text x="595" y="140" transform="scale(.1)" fill="#fff" textLength="1070">Coverage:functions</text><text aria-hidden="true" x="1425" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">35.48%</text><text x="1425" y="140" transform="scale(.1)" fill="#fff" textLength="430">35.48%</text></g></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="146" height="20" role="img" aria-label="Coverage:lines: 92.28%"><title>Coverage:lines: 92.28%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="146" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="93" height="20" fill="#555"/><rect x="93" width="53" height="20" fill="#4c1"/><rect width="146" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="475" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="830">Coverage:lines</text><text x="475" y="140" transform="scale(.1)" fill="#fff" textLength="830">Coverage:lines</text><text aria-hidden="true" x="1185" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">92.28%</text><text x="1185" y="140" transform="scale(.1)" fill="#fff" textLength="430">92.28%</text></g></svg><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="182" height="20" role="img" aria-label="Coverage:statements: 91.69%"><title>Coverage:statements: 91.69%</title><linearGradient id="s" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><clipPath id="r"><rect width="182" height="20" rx="3" fill="#fff"/></clipPath><g clip-path="url(#r)"><rect width="129" height="20" fill="#555"/><rect x="129" width="53" height="20" fill="#4c1"/><rect width="182" height="20" fill="url(#s)"/></g><g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" text-rendering="geometricPrecision" font-size="110"><text aria-hidden="true" x="655" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="1190">Coverage:statements</text><text x="655" y="140" transform="scale(.1)" fill="#fff" textLength="1190">Coverage:statements</text><text aria-hidden="true" x="1545" y="150" fill="#010101" fill-opacity=".3" transform="scale(.1)" textLength="430">91.69%</text><text x="1545" y="140" transform="scale(.1)" fill="#fff" textLength="430">91.69%</text></g></svg>
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
