import { useState } from "react";
import { FlatList, Text, View } from "react-native";
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
  StyledButton,
  ButtonText,
} from "./styles";
import { IChampion } from "../../../App";
import { champions } from "../../config/data";
import { renderGuessedChampions } from "../../components/UserGuess";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

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
  const [fontsLoaded] = useFonts({
    FrizItalic: require("../../../assets/fonts/Friz-Italic.ttf"),
    FrizRegular: require("../../../assets/fonts/Friz-Regular.ttf"),
  });

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

  if (!fontsLoaded) return null;

  return (
    <Container>
      <BackgroundImage resizeMode="cover" source={backGroundImage}>
        <StyledButton onPress={handleNewChampion}>
          <LinearGradient
            colors={["#d08e1a", "#88370c"]}
            style={{ flex: 1, borderRadius: 10, justifyContent: "center" }}
          >
            <ButtonText style={{ fontFamily: "FrizRegular" }}>
              NEW CHAMPION
            </ButtonText>
          </LinearGradient>
        </StyledButton>

        {!userGuessedRight && (
          <InputArea>
            <InputField
              onChangeText={handleChangeText}
              value={input}
              style={{ fontFamily: "FrizItalic" }}
            />

            <FlatList
              data={championsOptions}
              keyExtractor={(champion: IChampion) => champion.id}
              renderItem={({ item }) => (
                <InputOption onPress={() => handleGuess(item.name)}>
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
