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


/*

setValue( key, value )

accepts two arguments `key` and `value`.  
will set the `value` in the vault identified by it's `key`.  

```
getValue( key )

accepts one argument `key`.  
will return the `value` that was set if the `key` exists in the vault.  
will return `null` if the `key` does not exist in the vault.

*/

/*
var myVault = vault();
console.log( myVault.getValue() ); // null
console.log( myVault.setValue('secret password', 'hunter2') );
console.log( myVault.getValue('secret password') ); // hunter2
console.log( myVault.getValue('bank account') ); // null

var yourVault = vault();
console.log( myVault.getValue('secret password') ); // null
*/