import { Dimensions, FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { IChampion } from "../../../App";

export const Container = styled.View`
  flex: 1;
  z-index: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

const d = Dimensions.get("window");

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  flex: 1;
  width: ${d.width};
  height: ${d.height};
`;

export const InputArea = styled.TouchableOpacity`
  position: absolute;
  flex: 1;
  z-index: 3;
  top: 130px;
`;

export const InputField = styled.TextInput`
  padding: 10px 15px;
  width: 200px;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: white;
  font-size: 22px;
`;

export const InputOption = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  pointer-events: auto;
`;

export const WinningScreen = styled.View`
  top: -20px;
`;

export const TitleWrap = styled.View`
  bottom: 40px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  color: white;
  text-shadow: 3px 1px 1px rgba(0, 0, 0, 0.4);
`;

export const ChampionImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ChampionFullImage = styled.Image`
  width: 250px;
  height: 455px;
`;

export const GuessedList = styled.ScrollView`
  position: absolute;
  top: 200px;
  left: 0px;
  z-index: 0;
`;

export const LabelsList = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  margin-left: 90px;
`;

export const Label = styled.Text`
  width: 83px;
  height: 25px;
  margin: 0px 3.5px;
  text-align: center;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-weight: bold;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75);
`;

export const StyledButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  width: 200px;
  height: 50px;
  font-size: 30px;
  justify-content: center;
  border-radius: 10px;
  border: 1.5px solid rgba(0, 0, 0, 0.4);
  margin: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  color: white;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.6);
`;
