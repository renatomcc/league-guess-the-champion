export function getGuessColor(champion: any, guess: any) {
  if (champion == null && guess == null) return "lightgreen";
  if (champion == null && guess != null) return "lightgrey";
  if (champion != null && guess == null) return "lightgrey";
  if (typeof champion == "number" && champion == guess) return "lightgreen";
  if (typeof champion == "number" && champion != guess) return "lightgrey";
  if (String(champion) == String(guess)) return "lightgreen";
  if (
    typeof champion == "string" &&
    typeof guess == "string" &&
    champion != guess
  )
    return "lightgrey";

  if (Object.values(champion).some((element: any) => guess.includes(element)))
    return "orange";
  return "lightgrey";
}
