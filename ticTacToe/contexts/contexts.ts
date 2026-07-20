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

type Patterns = {
  box1: string;
  box2: string;
  box3: string;
  box4: string;
  box5: string;
  box6: string;
  box7: string;
  box8: string;
  box9: string;
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
      box1: string;
      box2: string;
      box3: string;
      box4: string;
      box5: string;
      box6: string;
      box7: string;
      box8: string;
      box9: string;
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
    box1: '',
    box2: '',
    box3: '',
    box4: '',
    box5: '',
    box6: '',
    box7: '',
    box8: '',
    box9: '',
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
