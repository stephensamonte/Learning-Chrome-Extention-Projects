// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let page = document.getElementById('buttonDiv');

// Colors the user can pick from 
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) {

  // create a button for each color
  for (let item of kButtonColors) {
    let button = document.createElement('button');
    button.style.backgroundColor = item;

    // on click event for the button
    button.addEventListener('click', function() {

      // set the color in storage
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });

    // add the button to the page
    page.appendChild(button);
  }
}

// call function to create page
constructOptions(kButtonColors);
