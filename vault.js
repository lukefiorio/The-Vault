'use strict';
module.exports = function() {
  
  let vault = {};
  
  const setValue = function(key,value) {
    if (!key || !value) {
      return null;
    } else {
      vault.key = value;
    }
  }

  const getValue = function(key) {
    // // alternatively
    // if (!vault.key) return null;

    // return vault.key;

    if (vault.key) {
      return vault.key;
    } else {
      return null;
    }
  }
  return {
    setValue: setValue,
    getValue: getValue
  }

};