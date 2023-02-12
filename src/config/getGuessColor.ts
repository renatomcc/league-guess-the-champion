export function getGuessColor(champion: any, guess: any) {
  if (champion == null && guess == null) return "green";
  if (champion == null && guess != null) return "grey";
  if (champion != null && guess == null) return "grey";
  if (typeof champion == "number" && champion == guess) return "green";
  if (typeof champion == "number" && champion != guess) return "grey";
  if (String(champion) == String(guess)) return "green";
  if (
    typeof champion == "string" &&
    typeof guess == "string" &&
    champion != guess
  )
    return "grey";

  if (Object.values(champion).some((element: any) => guess.includes(element)))
    return "#bd7a00";
  return "grey";
}
