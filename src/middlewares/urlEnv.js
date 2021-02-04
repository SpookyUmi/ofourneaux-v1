const URL = process.env.NODE_ENV == 'none' ? process.env.DATABASE_URL : 'https://ofourneaux.herokuapp.com';

console.log('URL ENV=>', URL);

export default URL;
