import tiles from '../config/tiles';

class Game extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('tiles', './assets/tiles.png');
    this.load.tilemapTiledJSON('map', './assets/map.json');
  }

  create() {
    const noCollisionTiles = [tiles.EMPTY, tiles.FLAG_LEFT];

    this.map = this.make.tilemap({ key: 'map' });
    this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
    this.platform = this.map.createStaticLayer('platform', this.tileset, 0, 0);

    this.map.createStaticLayer('background', this.tileset, 0, 0);
    this.platform.setCollisionByExclusion(noCollisionTiles, true);

    this.inputs = this.input.keyboard.createCursorKeys();
  }

  update() {}
}

export default Game;
