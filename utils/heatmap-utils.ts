const initialState = () => new Array(7).fill([]).map(() => new Array(24).fill([]));

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const hours = [
  '2:00 am',
  '4:00 am',
  '6:00 am',
  '8:00 am',
  '10:00 am',
  '12:00 am',
  '2:00 pm',
  '4:00 pm',
  '6:00 pm',
  '8:00 pm',
  '10:00 pm',
  '12:00 pm',
];

const colorPallette = [
  '#d9d3ff',
  '#C2B9FF',
  '#C2B9FF',
  '#928BE7',
  '#928BE7',
  '#7974CD',
  '#7974CD',
  '#001056',
  '#001056',
  '#161A62',
  '#161A62',
  '#001056',
];

export { days, hours, colorPallette, initialState };
