import styled from "styled-components/native";

interface Props {
  color: any;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ChampionImage = styled.Image`
  width: 95px;
  height: 95px;
`;

export const CenteredText = styled.Text`
  text-align: center;
  font-size: 13px;
  color: black;
  /* text-shadow: 2px 1px 1px rgba(0,0,0,0.8); */
`;

export const CenteredList = styled.FlatList`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LabelCard = styled.View<Props>`
  width: 95px;
  height: 95px;
  align-items: center;
  justify-content: center;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-right: 1px;
  border-left: 1px;
  border: solid black;
  background-color: ${(props) => props.color};
`;