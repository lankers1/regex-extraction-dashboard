export function matchTerms(regex: string, textContent: string) {
  return textContent.match(RegExp(regex.slice(1, regex.length - 1), "gi"));
}
