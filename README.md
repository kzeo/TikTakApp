# TikTakApp

This is a clone of TikTok to share your short films with your friends and comment them. You can use searchbar to find interesting video or user to check his profile. App is fully responsive on small and medium devices.

## Installation:

Open tiktak-app/utils/client.ts\

projectId: 'put your sanity projectId',\

In root folder create .env.development:\

```js
NEXT_PUBLIC_SANITY_TOKEN = PUT TOKEN

NEXT_PUBLIC_GOOGLE_API_TOKEN = PUT TOKEN

NEXT_PUBLIC_BASE_URL = http://localhost:3000
```

## Sanity token

Use `sanity start` command into sanity-backend folder and go to Manage project/API/Tokens.\
[Google OAuth2 docs](https://developers.google.com/identity/protocols/oauth2)\
Configure credentials.\

In sanity backend use `sanity start`
In root folder use `npm run dev`
