export function matchTerms(regex: string, textContent: string) {
  return textContent.match(RegExp(regex, "gi"));
}
