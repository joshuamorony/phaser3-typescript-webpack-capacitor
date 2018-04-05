/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */

'use strict';
importScripts('./sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'phaser-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/bundle.js',
	'./assets/sprites/dude.png',
	'./assets/sprites/platform.png',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
