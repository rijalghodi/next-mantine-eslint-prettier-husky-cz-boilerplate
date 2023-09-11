export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function ellipsis(
  text: string,
  maxTextLength?: number | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
): string {
  let byte: number;

  switch (maxTextLength) {
    case 'xl':
      byte = 100;
      break;
    case 'lg':
      byte = 60;
      break;
    case 'md':
      byte = 30;
      break;
    case 'sm':
      byte = 20;
      break;
    case 'xs':
      byte = 12;
      break;
    default:
      if (maxTextLength) {
        byte = maxTextLength;
      }
      byte = 8;
      break;
  }

  if (text.length <= (byte ? byte - 3 : 12)) return text;
  return `${text.substring(0, byte)}...`;
}

export function generateSlug(inputString: string): string {
  // Menghapus karakter non-alfanumerik, kecuali spasi
  const cleanedString = inputString.replace(/[^\w\s-]/g, '');

  // Mengganti spasi dengan tanda minus
  const slug = cleanedString.replace(/\s+/g, '-');

  // Mengubah semua huruf menjadi huruf kecil
  return slug.toLowerCase();
}
