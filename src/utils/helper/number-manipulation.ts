export function addDelimiters(number: number) {
  if (!Number.isInteger(number)) {
    return number;
  }
  const stringNumber = number.toString();

  const mod = stringNumber.length % 3;
  let chunks: string = stringNumber.substring(0, mod);

  for (let i = mod; i < stringNumber.length; i += 3) {
    const chunk = stringNumber.substring(i, i + 3);
    if (chunks) {
      chunks = chunks + '.';
    }
    chunks = chunks + chunk;
  }

  return chunks;
}
