// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// Create button element style
let changeColor = document.getElementById('changeColor');

// Crate button. Grabs the popup.html button
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

// on button click action. Requests color value from storage and applies color
// as the background of the button. 
// This is a pragamatically injected content script
changeColor.onclick = function(element) {

  // set color of page background to same color as button color
  let color = element.target.value;

  // This requires the activeTab permission
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
  });
};
