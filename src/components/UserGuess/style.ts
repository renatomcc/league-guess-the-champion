import styled from "styled-components/native";
import Animated, { Keyframe } from "react-native-reanimated";


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
  color: white;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 1);
`;

export const CenteredList = styled.FlatList`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const spin = new Keyframe({
  0: {
    transform: [{ rotateY: "-90deg" }],
  },
  100: {
    transform: [{ rotateY: "0deg" }],
  },
});

export const AnimatedLabelCard = styled(Animated.View)<Props>`
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

