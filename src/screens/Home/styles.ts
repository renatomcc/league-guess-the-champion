import { Dimensions, FlatList, FlatListProps, ListRenderItem, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { IChampion } from "../../../App";

export const Container = styled.View`
  flex: 1;
  margin-top: 60px;
  z-index: 1;
`;

const d = Dimensions.get("window")

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
  top: 90px;
`;

export const InputField = styled.TextInput`
  padding: 10px 15px;
  width: 200px;
  font-size: 22;
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
  background-color: white;
  font-size: 22px;
`;

export const OptionList = styled.FlatList``;

export const InputOption = styled.Pressable`
  flex-direction: row;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 0px 3px;
  pointer-events: auto;
`;

export const ChampionImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const GuessedList = styled.ScrollView`
  margin-top: 150px;
`;

export const LabelsList = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  margin-left: 95px;
`;

export const Label = styled.Text`
  width: 87.5px;
  height: 25px;
  margin: 0px 3.5px;
  text-align: center;
  border-bottom-width: 2px;
  border-color: rgba(0, 0, 0, 0.8);
  color: white;
  font-weight: bold;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.75);
`;

export const ChampionList = styled(FlatList as new (props: FlatListProps<IChampion>)=> FlatList<IChampion>)`
  gap: 5px;
`

export const StyledButton = styled.Button`
  background-color: 'black';
  font-size: 30px;
`