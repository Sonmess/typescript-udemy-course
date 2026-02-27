const userName = 'Max';

console.log(typeof userName);

type UserName = typeof userName;

const settings = {
  difficulty: 'easy',
  minLevel: 10,
  didStart: false,
  players: ['John', 'Jane'],
};

type Settings = {
  difficulty: string;
  minLevel: number;
  didStart: boolean;
  players: string[];
};

type anotherSettings = typeof settings;