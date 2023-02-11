import { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";
import {
  Container,
  BackgroundImage,
  InputArea,
  InputField,
  InputOption,
  ChampionImage,
  GuessedList,
  LabelsList,
  Label,
  ChampionList,
  StyledButton
} from "./styles";
import { IChampion } from "../../../App";
import { champions } from "../../config/data";
import { renderGuessedChampions } from "../../components/UserGuess";

export var currentChampion: IChampion =
  champions[Math.floor(Math.random() * 161)];

export function Home() {
  const [input, setInput] = useState("");
  const [championsOptions, setChampionsOptions] = useState<IChampion[]>([]);
  const [guessedChampions, setGuessedChampions] = useState<IChampion[]>([]);
  const backGroundImage = {
    uri: "https://mfiles.alphacoders.com/609/609807.jpg",
  };
  const [userGuessedRight, setUserGuessedRight] = useState(false);

  function handleNewChampion() {
    setUserGuessedRight(false);
    currentChampion = champions[Math.floor(Math.random() * 161)];
    setGuessedChampions([]);
  }

  function handleChangeText(enteredText: string) {
    setInput(enteredText);
    if (enteredText.length <= 1) setChampionsOptions([]);
    if (enteredText.length > 0) {
      setChampionsOptions(
        champions.filter((champ: IChampion) =>
          champ.name.toLowerCase().includes(enteredText.toLocaleLowerCase())
        )
      );
    }
  }

  function handleGuess(champion: string) {
    if (
      champions.find(
        (champ) =>
          champ.name.toLocaleLowerCase() == champion.toLocaleLowerCase()
      )
    ) {
      if (!guessedChampions.find((champ) => champ.name === champion)) {
        const currentGuess: IChampion | undefined = champions.find(
          (champ: IChampion) =>
            champ.name.toLocaleLowerCase() == champion.toLocaleLowerCase()
        );
        setGuessedChampions((currentGuesses: any) => [
          ...currentGuesses,
          currentGuess,
        ]);
        setInput("");
        if (currentGuess === currentChampion) {
          alert("Acertou!");
          setUserGuessedRight(true);
        }
      } else alert("Tente um novo campeão");
    } else {
      alert("Campeão não encontrado!");
    }
    setInput("");
    setChampionsOptions([]);
  }

  return (
    <Container>
      <BackgroundImage resizeMode="cover" source={backGroundImage}>
        <StyledButton title="New Champion" onPress={handleNewChampion} />

        {!userGuessedRight && (
          <InputArea>
            <InputField onChangeText={handleChangeText} value={input} />

            <FlatList
              data={championsOptions}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <InputOption
                  onPress={() => handleGuess(item.name)}
                  key={item.id}
                >
                  <ChampionImage source={{ uri: `${item.image.sprite}` }} />
                  <Text> {item.name} </Text>
                </InputOption>
              )}
            />
          </InputArea>
        )}

        <GuessedList horizontal={true}>
          <View>
            {guessedChampions.length > 0 && (
              <LabelsList>
                <Label>Rota(s)</Label>
                <Label>Classe(s)</Label>
                <Label>Gênero</Label>
                <Label>Espécie(s)</Label>
                <Label>Recurso</Label>
                <Label>Alcance</Label>
                <Label>Região(ões)</Label>
                <Label>Lançamento</Label>
              </LabelsList>
            )}
            <FlatList
              data={guessedChampions}
              keyExtractor={(item: IChampion) => item.id}
              renderItem={renderGuessedChampions}
            />
          </View>
        </GuessedList>
      </BackgroundImage>
    </Container>
  );
}
