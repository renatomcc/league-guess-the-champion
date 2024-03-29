import { useState } from "react";
import { FlatList, ListRenderItem, Text, View } from "react-native";
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
  ChampionFullImage,
  WinningScreen,
  Title,
  TitleWrap,
  TutorialView,
  Square,
  FlexView,
  StyledText,
} from "./styles";
import { IChampion } from "../../../App";
import { champions } from "../../config/data";
import Guess from "../../components/UserGuess";
import { useFonts } from "expo-font";
import { LinearGradient } from "expo-linear-gradient";

export var currentChampion: IChampion =
  champions[Math.floor(Math.random() * 161)];

const GuessedChampion = ({ data }: { data: IChampion }) => (
  <Guess Champion={data} />
);
const renderGuessedChampions: ListRenderItem<IChampion> = ({ item }) => (
  <GuessedChampion data={item} />
);

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
    FrizBold: require("../../../assets/fonts/Friz-Bold.otf"),
  });

  function handleNewChampion() {
    setUserGuessedRight(false);
    currentChampion = champions[Math.floor(Math.random() * 161)];
    setGuessedChampions([]);
    console.log(currentChampion.name);
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
          setGuessedChampions([]);
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

        <TutorialView>
          <FlexView>
            <Square color="grey" />
            <StyledText>Incorreto</StyledText>
          </FlexView>
          <FlexView>
            <Square color="orange" />
            <StyledText>Parcialmente Correto</StyledText>
          </FlexView>
          <FlexView>
            <Square color="green" />
            <StyledText>Correto</StyledText>
          </FlexView>
        </TutorialView>

        {!userGuessedRight ? (
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
        ) : (
          <WinningScreen>
            <ChampionFullImage
              source={{
                uri: `${currentChampion.image.full}`,
              }}
            />
            <TitleWrap>
              <Title style={{ fontFamily: "FrizRegular" }}>
                {currentChampion.name}
              </Title>
            </TitleWrap>
          </WinningScreen>
        )}

        <GuessedList horizontal={true} style={{ height: 576 }}>
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
