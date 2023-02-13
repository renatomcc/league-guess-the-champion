import { getGuessColor } from "../../config/getGuessColor";
import { currentChampion } from "../../screens/Home";
import { useEffect, useState } from "react";
import {
  Container,
  ChampionImage,
  CenteredText,
  spin,
  AnimatedLabelCard,
} from "./style";
import { IChampion } from "../../../App";
import { useFonts } from "expo-font";

interface IProps {
  Champion: IChampion;
}

export default function Guess(props: IProps) {
  const [fontsLoaded] = useFonts({
    FrizItalic: require("../../../assets/fonts/Friz-Italic.ttf"),
    FrizRegular: require("../../../assets/fonts/Friz-Regular.ttf"),
    FrizBold: require("../../../assets/fonts/Friz-Bold.otf"),
  });
  const [emojiHint, setEmojiHint] = useState("");
  const roles = props.Champion.roles.join(",\n");
  const tags = props.Champion.tags.join(",\n");
  const species = props.Champion.specie.join(",\n");
  const range = props.Champion.range_type.join(",\n");
  const regions = props.Champion.regions.join(",\n");

  useEffect(() => {
    if (props.Champion.release_year > currentChampion.release_year)
      setEmojiHint("⬇️");
    if (props.Champion.release_year < currentChampion.release_year)
      setEmojiHint("⬆️");
  }, []);

  if (!fontsLoaded) return null;
  return (
    <Container>
      <ChampionImage source={{ uri: `${props.Champion.image.sprite}` }} />
      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.roles, props.Champion.roles)}
      >
        <CenteredText> {roles} </CenteredText>
      </AnimatedLabelCard>

      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.tags, props.Champion.tags)}
      >
        <CenteredText> {tags} </CenteredText>
      </AnimatedLabelCard>

      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.genre, props.Champion.genre)}
      >
        <CenteredText> {props.Champion.genre} </CenteredText>
      </AnimatedLabelCard>
      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.specie, props.Champion.specie)}
      >
        <CenteredText> {species} </CenteredText>
      </AnimatedLabelCard>

      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.resource, props.Champion.resource)}
      >
        <CenteredText> {props.Champion.resource} </CenteredText>
      </AnimatedLabelCard>
      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(
          currentChampion.range_type,
          props.Champion.range_type
        )}
      >
        <CenteredText> {range} </CenteredText>
      </AnimatedLabelCard>

      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(currentChampion.regions, props.Champion.regions)}
      >
        <CenteredText> {regions} </CenteredText>
      </AnimatedLabelCard>

      <AnimatedLabelCard
        entering={spin}
        color={getGuessColor(
          currentChampion.release_year,
          props.Champion.release_year
        )}
      >
        <CenteredText>
          {props.Champion.release_year} {emojiHint}
        </CenteredText>
      </AnimatedLabelCard>
    </Container>
  );
}

