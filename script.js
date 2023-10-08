//your JS code here. If required.
let max = -Infinity, result = -Infinity;

  for (const value of arr) {
    const nr = Number(value)

    if (nr > max) {
      [result, max] = [max, nr] // save previous max
    } else if (nr < max && nr > result) {
      result = nr; // new second biggest
    }
  }

  return result;
