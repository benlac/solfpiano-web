import doSong from '../assets/audio/do-k.mp3';
import reSong from '../assets/audio/re-k.mp3';
import solSong from '../assets/audio/sol-k.mp3';
import miSong from '../assets/audio/mi-k.mp3';
import laSong from '../assets/audio/la-k.mp3';
import siSong from '../assets/audio/si-k.mp3';
import faSong from '../assets/audio/fa-k.mp3';

const importRightNote = (keyToPlay: string) => {
  switch (keyToPlay) {
    case 'do_':
      const do_ = new Audio(doSong);
      return do_.play();
    case 're_':
      const re_ = new Audio(reSong);
      return re_.play();
    case 'mi_':
      const mi_ = new Audio(miSong);
      return mi_.play();
    case 'fa_':
      const fa_ = new Audio(faSong);
      return fa_.play();
    case 'sol_':
      const sol_ = new Audio(solSong);
      return sol_.play();
    case 'la_':
      const la_ = new Audio(laSong);
      return la_.play();
    case 'si_':
      const si_ = new Audio(siSong);
      return si_.play();
    default:
      return null;
  }
};

export default importRightNote;
