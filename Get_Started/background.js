// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  // Set value using storage API which requires the permission: storage
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });

  // Declaration rules. Determine when the user can interact with the extension
  // This section uses that permission: declarativeContent 
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{

      // allows the user to interact with the extension beased on the URL
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
