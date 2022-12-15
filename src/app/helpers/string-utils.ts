export function translateTurkishChars(str: string): string {
    return str
      .toLocaleLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace('ş', 's')
      .replace('ç', 'c')
      .replace('ğ', 'g')
      .replace('ü', 'u')
      .replace('ö', 'o')
      .replace('ı', 'i')
      .replace(' ', '');
  }