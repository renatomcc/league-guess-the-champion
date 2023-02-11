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
  border-width: 1px;
  background-color: ${(props) => props.color};
`;