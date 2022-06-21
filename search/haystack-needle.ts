export function findNeedle_SS(haystack: number[], needle: number): number {
  let pos: number = -1;
  if (haystack.length === 0) {
    return pos;
  }

  let left = 0,
    right = haystack.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (needle < haystack[mid]) {
      right = mid - 1;
    } else if (needle > haystack[mid]) {
      left = mid + 1;
    } else {
      pos = mid;
      break;
    }
  }

  return pos;
}

export function findNeedle_BS(haystack: number[], needle: number): number {
  let pos: number = -1;
  if (haystack.length === 0) {
    return pos;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      pos = i;
      break;
    }
  }

  return pos;
}
