import React from 'react';

function GameContent() {
  return (
    <>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        Application de solfège pour piano
      </p>
      <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
        Dans cette application, nous vous proposons une lecture simultanée de
        notes en clés de Fa et de Sol, avec une difficulté croissante. Le sens
        de la lecture est impératif :la lecture de notes doit toujours se faire
        de bas en haut. Cette technique de lecture est très importante, surtout
        pour les pianistes classiques.
      </p>
    </>
  );
}
export default GameContent;
