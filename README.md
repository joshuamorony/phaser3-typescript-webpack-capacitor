# Phaser/TypeScript/Webpack/Capacitor Starter

A simple starter template for using Phaser with TypeScript, Webpack, and Capacitor for native iOS and Android builds. Using this repository will require a working knowledge of Capacitor - you can find documentation [here](https://capacitor.ionicframework.com/docs/) and additional learning resources [here](https://www.joshmorony.com/tag/capacitor/).

As of this commit, Phaser 3 has not officially been released and Capacitor is still in alpha. I would not recommend using this in a production environment - proceed with caution.

Inspiration/configuration from: 
- https://github.com/digitsensitive/phaser3-typescript
- https://github.com/TooManyCaptains/TooManyCaptains

## Install

```
npm install
```

```
npx cap init
```

## Develop

```
npm run dev
```

## Build

```
npm run build
```

## Add Native Platforms

```
npx cap add ios
```

```
npx cap add android
```

## Run

```
npm run build
```

```
npx cap open ios
```

```
npx cap open android
```