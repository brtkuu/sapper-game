<template>
  <div>
    <Game />
    <div class="assets">
      <section>
        <h2>Sounds</h2>
        <p>Luke.RUSTLTD, "Bomb_Explosion_8bit", <a href="https://opengameart.org/content/bombexplosion8bit">link</a></p>
        <p>christoph, "Clock ticking", <a href="https://opengameart.org/content/clock-ticking">link</a></p>
      </section>
      <section>
        <h2>Graphics</h2>
        <p>truezipp, "Bomb", <a href="https://opengameart.org/content/bomb-0">link</a></p>
        <p>stereoscopic, "Grass", <a href="https://opengameart.org/content/grass-1">link</a></p>
        <p>Lamoot, "Dirt 002", <a href="https://opengameart.org/content/dirt-002">link</a></p>
      </section>
    </div>
  </div>
</template>
<script>

import Game from '@/components/MinesweeperGame';

export default {
  name: 'Main',
  components: {
    Game
  }
};
</script>
