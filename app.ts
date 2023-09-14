import { EventParser } from './src/models/EventParser';

const formattedMatches = EventParser.getMatches();

console.log(formattedMatches.map((match) => match?.getFormattedData()));
