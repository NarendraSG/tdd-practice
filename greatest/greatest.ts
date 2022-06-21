export function findGreatest(list?: Array<number>) {
  let greatest = Number.MIN_SAFE_INTEGER;
  if (!list || !list.length) return null;

  for (let item of list) {
    greatest = item > greatest ? item : greatest;
  }

  return greatest;
}
