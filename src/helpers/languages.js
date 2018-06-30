

export function show(key){
  const LANG = global.LANGUAGES[global.LANG];
  return LANG[key] ? LANG[key] : key;
}