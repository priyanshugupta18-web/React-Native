import { useContext, createContext } from 'react';
import React from 'react';
import { boolean } from 'yup';
type Players = {
  player1: string;
  player2: string;
};
type Winner = {
  winner: string;
};

type Box = {
  pressed: boolean,
  turn: string,
}

type Patterns = {
  box1: Box;
  box2: Box;
  box3: Box;
  box4: Box;
  box5: Box;
  box6: Box;
  box7: Box;
  box8: Box;
  box9: Box;
};

type DataContextType = {
  players: Players;
  setPlayers: React.Dispatch<
    React.SetStateAction<{ player1: string; player2: string }>
  >;
  winner: Winner;
  setWinner: React.Dispatch<React.SetStateAction<{ winner: string }>>;
  patterns: Patterns;
  setPatterns: React.Dispatch<
    React.SetStateAction<{
      box1: {pressed: boolean, turn: string};
      box2: {pressed: boolean, turn: string};
      box3: {pressed: boolean, turn: string};
      box4: {pressed: boolean, turn: string};
      box5: {pressed: boolean, turn: string};
      box6: {pressed: boolean, turn: string};
      box7: {pressed: boolean, turn: string};
      box8: {pressed: boolean, turn: string};
      box9: {pressed: boolean, turn: string};
    }>
  >;
  draw: boolean | null;
  setDraw: React.Dispatch<React.SetStateAction<boolean | null>>;
  turn: string;
  setTurn: React.Dispatch<React.SetStateAction<string>>;
};

const data = createContext<DataContextType>({
  players: { player1: '', player2: '' },
  setPlayers: () => {},
  winner: { winner: '' },
  setWinner: () => {},
  patterns: {
      box1: {pressed: false, turn: ""},
      box2: {pressed: false, turn: ""},
      box3: {pressed: false, turn: ""},
      box4: {pressed: false, turn: ""},
      box5: {pressed: false, turn: ""},
      box6: {pressed: false, turn: ""},
      box7: {pressed: false, turn: ""},
      box8: {pressed: false, turn: ""},
      box9: {pressed: false, turn: ""},
  },
  setPatterns: () => {},
  draw: null,
  setDraw: () => {},
  turn: '',
  setTurn: () => {},
});

export const DataProvider = data.Provider;

export default function useData() {
  return useContext(data);
}
