exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var result = -1;
    arr.forEach(function(val, idx) {
      if (val === item) {
        result = idx;
      }
    });
    return result;
  },

  sum: function(arr) {
    return arr.reduce(function(a, b) {
      return a += b;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    var slots = [], removedItems = 0;
    arr.forEach(function(val, idx) {
      if (val === item) {
        slots.push(idx);
      }
    });
    slots.forEach(function(val, idx) {
      arr.splice(val - removedItems, 1);
      removedItems++;
    });
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    arr2.forEach(function(val) {
      arr1.push(val);
    });
    return arr1;
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    arr.forEach(function(val) {
      if (val === item) {
        count++;
      }
    });
    return count;
  },

  duplicates: function(arr) {
    var dupes = [];
    var newArr = arr;
    arr.forEach(function(val, idx) {
      newArr.forEach(function(val2, idx2) {
        if ((val === val2 && idx !== idx2) && dupes.indexOf(val) === -1) {
          dupes.push(val);
        }
      })
    });
    return dupes;
  },

  square: function(arr) {
    return arr.map(function(num) {
      return num*num;
    });
  },

  findAllOccurrences: function(arr, target) {
    var occurs = [];
    arr.forEach(function(val, idx) {
      if (val === target) {
        occurs.push(idx);
      }
    });
    return occurs;
  }
};
