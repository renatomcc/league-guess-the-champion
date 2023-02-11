import React from "react";
import { FlatList, ListRenderItem } from "react-native";
import { getGuessColor } from "../../config/getGuessColor";
import { currentChampion } from "../../screens/Home";
import { useEffect, useState } from "react";
import { Container, ChampionImage, LabelCard, CenteredText } from "./style";
import { IChampion } from "../../../App";

interface IProps {
  Champion: IChampion;
}

export default function Guess(props: IProps) {
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

  return (
    <Container>
      <ChampionImage source={{ uri: `${props.Champion.image.sprite}` }} />
      <LabelCard
        color={getGuessColor(currentChampion.roles, props.Champion.roles)}
      >
        <CenteredText> {roles} </CenteredText>
      </LabelCard>

      <LabelCard
        color={getGuessColor(currentChampion.tags, props.Champion.tags)}
      >
        <CenteredText> {tags} </CenteredText>
      </LabelCard>

      <LabelCard
        color={getGuessColor(currentChampion.genre, props.Champion.genre)}
      >
        <CenteredText> {props.Champion.genre} </CenteredText>
      </LabelCard>
      <LabelCard
        color={getGuessColor(currentChampion.specie, props.Champion.specie)}
      >
        <CenteredText> {species} </CenteredText>
      </LabelCard>

      <LabelCard
        color={getGuessColor(currentChampion.resource, props.Champion.resource)}
      >
        <CenteredText> {props.Champion.resource} </CenteredText>
      </LabelCard>
      <LabelCard
        color={getGuessColor(
          currentChampion.range_type,
          props.Champion.range_type
        )}
      >
        <CenteredText> {range} </CenteredText>
      </LabelCard>

      <LabelCard
        color={getGuessColor(currentChampion.regions, props.Champion.regions)}
      >
        <CenteredText> {regions} </CenteredText>
      </LabelCard>

      <LabelCard
        color={getGuessColor(
          currentChampion.release_year,
          props.Champion.release_year
        )}
      >
        <CenteredText>
          {props.Champion.release_year} {emojiHint}
        </CenteredText>
      </LabelCard>
    </Container>
  );
}

export const GuessedChampion = ({ data }: { data: IChampion }) => (
  <Guess Champion={data} />
);
export const renderGuessedChampions: ListRenderItem<IChampion> = ({ item }) => (
  <GuessedChampion data={item} />
);
