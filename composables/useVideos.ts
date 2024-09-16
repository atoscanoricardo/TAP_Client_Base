// composables/useVideos.ts
import type { Video } from '@/types';

export const useVideos = async () => {

  // transform https://nuxt.com/docs/getting-started/data-fetching
    const { data: videos, error } = await useFetch('/api/videos', {
      transform: (videos: Video[]) => {
        return videos.map( (video: Video) => ({ 
          title: capitalize(decodeAndRemoveAccents(removeCharacter(truncateString(video.title), '-'))), 
          id: video.id, 
          src: video.src,
        }))
      }
    })

    return { data: videos, error }

    // Use this for data without transform
    /*const { data, error } = await useFetch('/api/videos');
    if (error.value) {
      console.error(error.value);
    }    
  
    return { data, error };*/    

  };

  const maxLength = 30;

  // Arrow functions
  const truncateString = (text: string): string =>
    (text.length > maxLength ? text.slice(0, maxLength) + '...' : text);

  const capitalize = (text: string): string =>
    text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());

  const removeCharacter = (text: string, character: string) => {
    const regex = new RegExp(character, 'g'); 
    return text.replace(regex, ' ');
  };
  
  const decodeAndRemoveAccents = (text: string): string => {
    // Decodifica caracteres en formato URL
    const decodedText = decodeURIComponent(text);
  
    // Mapa de caracteres acentuados a sus versiones no acentuadas
    const accentsMap: { [key: string]: string } = {
      'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
      'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
      'à': 'a', 'è': 'e', 'ì': 'i', 'ò': 'o', 'ù': 'u',
      'À': 'A', 'È': 'E', 'Ì': 'I', 'Ò': 'O', 'Ù': 'U',
      'â': 'a', 'ê': 'e', 'î': 'i', 'ô': 'o', 'û': 'u',
      'Â': 'A', 'Ê': 'E', 'Î': 'I', 'Ô': 'O', 'Û': 'U',
      'ã': 'a', 'õ': 'o', 'ñ': 'n',
      'Ã': 'A', 'Õ': 'O', 'Ñ': 'N',
      'ç': 'c', 'Ç': 'C'
    };
  
    // Reemplaza caracteres acentuados con sus versiones no acentuadas
    return decodedText.replace(/[áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãõñÃÕÑçÇ]/g, match => accentsMap[match] || match);
  };
  