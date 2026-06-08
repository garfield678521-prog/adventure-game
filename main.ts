// Adventure Game V3 - Stage 1
// Multiplayer Foundation Plan
//
// Baseline extracted from latest ZIP.
// Stage 1 goals:
// - Prepare for 4-player support
// - Define multiplayer state namespace
// - Keep current gameplay intact
// - No map or asset changes
//
// Next stages:
// Stage 2: lives/deaths/respawns
// Stage 3: combat ownership
// Stage 4: world integration
// Stage 5: cleanup/polish

namespace MultiplayerState {
    export const Lives = MultiplayerState.create()
    export const Respawning = MultiplayerState.create()
}

namespace SpriteKind {
    export const Map = SpriteKind.create()
    export const Food2 = SpriteKind.create()
    export const Ammmmmmo = SpriteKind.create()
    export const Hearts = SpriteKind.create()
    export const Enemyprojectile = SpriteKind.create()
    export const Fiveface = SpriteKind.create()
    export const Gooooonfa = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_direction = 2
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door0, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(3, 31))
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myMinimap = minimap.minimap(MinimapScale.Quarter, 2, 0)
    mySprite2 = sprites.create(minimap.getImage(myMinimap), SpriteKind.Map)
    mySprite2.setPosition(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y))
    controller.moveSprite(mySprite, 0, 0)
    minimap.includeSprite(myMinimap, mySprite, MinimapSpriteScale.Quadruple)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    Chest_amount += -1
    tiles.setTileAt(location, sprites.builtin.oceanDepths0)
    if (Chest_amount == 0) {
        game.splash("Thank You For Playing ")
        game.splash("You Win")
        Start()
    }
})
sprites.onDestroyed(SpriteKind.Fiveface, function (sprite) {
    Player_shoot = 0
})
tileUtil.onMapUnloaded(function (tilemap2) {
    if (tilemap2 == Temple) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        Enemy_Exits = 0
    } else if (tilemap2 == Temple_Inside) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Ammmmmmo)
        sprites.destroyAllSpritesOfKind(SpriteKind.Hearts)
    } else if (tilemap2 == Castle_inside) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Ammmmmmo)
        sprites.destroyAllSpritesOfKind(SpriteKind.Hearts)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gooooonfa, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Boomerang = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Weapon == 1) {
        if (Player_shoot == 0) {
            if (Player_direction == 1) {
                Player_shoot = 1
                Projectile3 = sprites.createProjectileFromSprite(img`
                    . . . . f f . . . . . . . . . . 
                    . . . f f f f . . . . . . . . . 
                    . . . f 4 5 f . . . . . . . . . 
                    . . . f 4 5 f . . . . . . . . . 
                    . . . f 4 5 f . . . . . . . . . 
                    f f f f 4 5 f f f f f f f f . . 
                    f 4 4 4 4 5 f 1 1 1 1 1 1 1 f . 
                    f 4 5 5 5 5 f 1 1 1 1 1 1 1 1 f 
                    f 4 5 5 5 5 f b b b b b b b 1 f 
                    f 4 4 4 4 5 f 1 1 1 1 1 1 1 1 f 
                    f f f f 4 5 f 1 1 1 1 1 1 1 f . 
                    . . . f 4 5 f f f f f f f f . . 
                    . . . f 4 5 f . . . . . . . . . 
                    . . . f 4 5 f . . . . . . . . . 
                    . . . f f f f . . . . . . . . . 
                    . . . . f f . . . . . . . . . . 
                    `, mySprite, 200, 0)
                pause(100)
                Projectile3.follow(mySprite, 200)
                Projectile3.setKind(SpriteKind.Fiveface)
            }
            if (Player_direction == 2) {
                Projectile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . f f f . . . . . . 
                    . . . . . . f 1 1 1 f . . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . . . . . f 1 1 b 1 1 f . . . . 
                    . f f f f f f f f f f f f f f . 
                    f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
                    f f 4 4 4 4 4 5 5 4 4 4 4 4 f f 
                    . f f f f f 4 5 5 4 f f f f f . 
                    . . . . . f 4 5 5 4 f . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . f f f f f f . . . . . 
                    `, mySprite, 0, -200)
                pause(100)
                Projectile3.follow(mySprite, 200)
                Projectile3.setKind(SpriteKind.Fiveface)
            }
            if (Player_direction == 3) {
                Projectile3 = sprites.createProjectileFromSprite(img`
                    . . . . . f f f f f f . . . . . 
                    . . . . . f 4 4 4 4 f . . . . . 
                    . . . . . f 4 5 5 4 f . . . . . 
                    . f f f f f 4 5 5 4 f f f f f . 
                    f f 4 4 4 4 4 5 5 4 4 4 4 4 f f 
                    f f 5 5 5 5 5 5 5 5 5 5 5 5 f f 
                    . f f f f f f f f f f f f f f . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . f 1 1 b 1 1 f . . . . . 
                    . . . . . f 1 1 1 f . . . . . . 
                    . . . . . . f f f . . . . . . . 
                    `, mySprite, 0, 200)
                pause(100)
                Projectile3.follow(mySprite, 200)
                Projectile3.setKind(SpriteKind.Fiveface)
            }
            if (Player_direction == 4) {
                Projectile3 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . f f . . . . 
                    . . . . . . . . . f f f f . . . 
                    . . . . . . . . . f 5 4 f . . . 
                    . . . . . . . . . f 5 4 f . . . 
                    . . f f f f f f f f 5 4 f . . . 
                    . f 1 1 1 1 1 1 1 f 5 4 f f f f 
                    f 1 1 1 1 1 1 1 1 f 5 4 4 4 4 f 
                    f 1 b b b b b b b f 5 5 5 5 4 f 
                    f 1 1 1 1 1 1 1 1 f 5 5 5 5 4 f 
                    . f 1 1 1 1 1 1 1 f 5 4 4 4 4 f 
                    . . f f f f f f f f 5 4 f f f f 
                    . . . . . . . . . f 5 4 f . . . 
                    . . . . . . . . . f 5 4 f . . . 
                    . . . . . . . . . f 5 4 f . . . 
                    . . . . . . . . . f f f f . . . 
                    . . . . . . . . . . f f . . . . 
                    `, mySprite, -200, 0)
                pause(100)
                Projectile3.follow(mySprite, 200)
                Projectile3.setKind(SpriteKind.Fiveface)
            }
        }
    } else if (Weapon == 2) {
        if (info.score() > 0) {
            if (Player_direction == 1) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . c c . . . . . . . . b . . . . 
                    . c c c . . . . . . . b b . . . 
                    . c c c c . . . . . . b b b . . 
                    . . . f f f f f f f f b b b b . 
                    . c c c c . . . . . . b b b . . 
                    . c c c . . . . . . . b b . . . 
                    . c c . . . . . . . . b . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 200, 0)
                info.changeScoreBy(-1)
            }
            if (Player_direction == 2) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . b . . . . . . . . 
                    . . . . . . b b b . . . . . . . 
                    . . . . . b b b b b . . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . c f c . . . . . . . 
                    . . . . . c c f c c . . . . . . 
                    . . . . c c c . c c c . . . . . 
                    . . . . c c c . c c c . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -200)
                info.changeScoreBy(-1)
            }
            if (Player_direction == 3) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . c c c . c c c . . . . . 
                    . . . . c c c . c c c . . . . . 
                    . . . . . c c f c c . . . . . . 
                    . . . . . . c f c . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . . . . f . . . . . . . . 
                    . . . . b b b b b b b . . . . . 
                    . . . . . b b b b b . . . . . . 
                    . . . . . . b b b . . . . . . . 
                    . . . . . . . b . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 200)
                info.changeScoreBy(-1)
            }
            if (Player_direction == 4) {
                projectile = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . b . . . . . . . . c c . 
                    . . . b b . . . . . . . c c c . 
                    . . b b b . . . . . . c c c c . 
                    . b b b b f f f f f f f f . . . 
                    . . b b b . . . . . . c c c c . 
                    . . . b b . . . . . . . c c c . 
                    . . . . b . . . . . . . . c c . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -200, 0)
                info.changeScoreBy(-1)
            }
        }
    } else if (Weapon == 3) {
        if (Boomerang == 0) {
            if (Player_direction == 1) {
                Projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . e e e e e . . . . . . . 
                    . . . e e e . e e e . . . . . . 
                    . . e e e . . . e e e . . . . . 
                    . e e e . . . . . e e e . . . . 
                    . e e . . . . . . . e e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 200, 0)
                pause(100)
                Projectile4.follow(mySprite, 10)
                Projectile4.setKind(SpriteKind.Gooooonfa)
            }
            if (Player_direction == 2) {
                Projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . e e e e e . . . . . . . 
                    . . . e e e . e e e . . . . . . 
                    . . e e e . . . e e e . . . . . 
                    . e e e . . . . . e e e . . . . 
                    . e e . . . . . . . e e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -200)
                pause(100)
                Projectile4.follow(mySprite, 10)
                Projectile4.setKind(SpriteKind.Gooooonfa)
            }
            if (Player_direction == 3) {
                Projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . e e e e e . . . . . . . 
                    . . . e e e . e e e . . . . . . 
                    . . e e e . . . e e e . . . . . 
                    . e e e . . . . . e e e . . . . 
                    . e e . . . . . . . e e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 200)
                pause(100)
                Projectile4.follow(mySprite, 10)
                Projectile4.setKind(SpriteKind.Gooooonfa)
            }
            if (Player_direction == 4) {
                Projectile4 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . e e e . . . . . . . . 
                    . . . . e e e e e . . . . . . . 
                    . . . e e e . e e e . . . . . . 
                    . . e e e . . . e e e . . . . . 
                    . e e e . . . . . e e e . . . . 
                    . e e . . . . . . . e e . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -200, 0)
                pause(100)
                Projectile4.follow(mySprite, 10)
                Projectile4.setKind(SpriteKind.Gooooonfa)
            }
        }
    } else if (Weapon == 4) {

    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tileUtil.setWallAt(Jungle, tiles.getTileLocation(12, 11), false)
    tileUtil.setTileAt(Jungle, tiles.getTileLocation(12, 11), sprites.castle.tileGrass2)
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
    tileUtil.setTileAt(Temple, tiles.getTileLocation(0, 0), sprites.dungeon.greenSwitchDown)
    game.splash("The Earth Shook back in the Jungle")
    scene.cameraShake(5, 1000)
})
function Start() {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    info.setScore(5)
    Chest_amount = 5
    info.setLife(3)
    Level_Create()
    Player_Spawn()
    Weapon = 1
    sprites.destroyAllSpritesOfKind(SpriteKind.Ammmmmmo)
    sprites.destroyAllSpritesOfKind(SpriteKind.Hearts)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
scene.onOverlapTile(SpriteKind.Player, tileUtil.door2, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(16, 19))
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_direction = 4
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchDown, function (sprite, location) {
    tileUtil.setWallAt(Temple, tiles.getTileLocation(24, 7), false)
    tileUtil.setTileAt(Temple, tiles.getTileLocation(24, 7), sprites.dungeon.darkGroundCenter)
    tiles.setTileAt(location, sprites.dungeon.purpleSwitchUp)
    game.splash("The Earth Shook back in the Temple area")
    scene.cameraShake(5, 1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hearts, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    Chest_amount += -1
    tiles.setTileAt(location, sprites.builtin.oceanDepths0)
    if (Chest_amount == 0) {
        game.splash("Thank You For Playing ")
        game.splash("You Win")
        Start()
    }
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door8, function (sprite, location) {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(9, 29))
    tileUtil.loadConnectedMap(MapConnectionKind.Door3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    Chest_amount += -1
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    if (Chest_amount == 3) {
        game.splash("Go into menu")
        game.splash("Type 3")
        game.splash("And the code 6432")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Fiveface, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemyprojectile, function (sprite, otherSprite) {
    timer.throttle("action", 1000, function () {
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_direction = 1
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door13, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door3)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 2))
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door7, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door2)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
})
function Secret() {
    if (Yeeeeee == 6432) {
        game.splash("Correct secret tile map unlocked")
        tiles.setCurrentTilemap(tilemap`level10`)
        tiles.placeOnRandomTile(mySprite, sprites.builtin.oceanDepths0)
    } else if (Yeeeeee != 6432) {
        game.splash("Wrong Password Idiot")
    }
}
function Level_Create() {
    scene.setBackgroundColor(7)
    Temple = tilemap`level5`
    Temple_Inside = tilemap`level6`
    Jungle = tilemap`level1`
    Castle = tilemap`level2`
    Castle_inside = tilemap`level7`
    Extra = tilemap`level9`
    tileUtil.connectMaps(Jungle, Temple, MapConnectionKind.Door1)
    tileUtil.connectMaps(Temple, Temple_Inside, MapConnectionKind.Door2)
    tileUtil.connectMaps(Temple, Castle, MapConnectionKind.Door3)
    tileUtil.connectMaps(Castle, Castle_inside, MapConnectionKind.Door4)
    tiles.setCurrentTilemap(Jungle)
}
scene.onOverlapTile(SpriteKind.Player, tileUtil.door15, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door4)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 14))
})
function Player_Spawn() {
    mySprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f b b f f f . . . . 
        . . . f f b b b b b f f f . . . 
        . . f f f b b b b b b f f f . . 
        . . f f b b b b b b b b b f . . 
        . . f b b f f f f f f b b f . . 
        . . f f f f d d d d f f f f . . 
        . f f d d 1 f d d f 1 d d f f . 
        . f d d d 1 f d d f 1 d d d f . 
        . . f d d d f f f f d d d f . . 
        . . . f f d d d d d d f f . . . 
        . . b b f f f f f f f f b b . . 
        . . b d f b b b b b b f d b . . 
        . . b b f b b b b b b f b b . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(10, 4))
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Player_direction = 3
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    timer.throttle("action", 2000, function () {
        game.splash("Go into menu to change weapon")
        game.splash("Type 1 and a number between 1 - 3")
        game.splash("To attack press A")
        game.splash("For mini map press and hold b")
    })
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    Menu_Number = game.askForNumber("", 1)
    Menu()
})
info.onLifeZero(function () {
    Start()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ammmmmmo, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    sprites.destroy(mySprite2)
    controller.moveSprite(mySprite)
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door10, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door4)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(17, 17))
})
function Menu() {
    if (Menu_Number == 1) {
        Weapon = game.askForNumber("", 1)
    } else if (Menu_Number == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Player)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemyprojectile)
        info.setScore(5)
        Chest_amount = 2
        Level_Create()
        Player_Spawn()
    } else if (Menu_Number == 3) {
        Yeeeeee = game.askForNumber("", 4)
        Secret()
    } else if (Menu_Number == Player_direction) {
        game.splash("Get scammed")
    }
}
tileUtil.onMapLoaded(function (tilemap2) {
    if (tilemap2 == Temple) {
        for (let index = 0; index < randint(2, 12); index++) {
            Enemy_Exits = 1
            mySprite3 = sprites.create(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f11111111f.......
                ......fd11111111df......
                ......fd11111111df......
                ......fddd1111dddf......
                ......fbdbfddfbdbf......
                ......fcdcf11fcdcf......
                .....ffff111111bf.......
                ....fc111cdb1bdfff......
                ....f1b1bcbfbfc111cf....
                ....fbfbfbffff1b1b1f....
                .........fffffffbfbf....
                ..........fffff.........
                ...........fff..........
                ........................
                ........................
                ........................
                ........................
                `, SpriteKind.Enemy)
            tiles.placeOnRandomTile(mySprite3, sprites.castle.tilePath5)
        }
    } else if (tilemap2 == Temple_Inside) {
        for (let index = 0; index < 6; index++) {
            Ammo = sprites.create(img`
                . . . b b . . . 
                . . b b b b . . 
                . b b b b b b . 
                . . . f f . . . 
                . . c f f c . . 
                . c c f f c c . 
                c c c . . c c c 
                . . . . . . . . 
                `, SpriteKind.Ammmmmmo)
            tiles.placeOnRandomTile(Ammo, sprites.dungeon.floorMixed)
        }
        for (let index = 0; index < 2; index++) {
            Health = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f . f f f f f . . 
                . . f f 2 2 2 f f f 2 2 2 f f . 
                . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f f 2 2 2 2 2 2 2 2 2 f f . 
                . . . f f 2 2 2 2 2 2 2 f f . . 
                . . . . f f 2 2 2 2 2 f f . . . 
                . . . . . f f 2 2 2 f f . . . . 
                . . . . . . f f 2 f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Hearts)
            tiles.placeOnRandomTile(Health, sprites.dungeon.floorMixed)
        }
    } else if (tilemap2 == Castle_inside) {
        for (let index = 0; index < 6; index++) {
            Ammo = sprites.create(img`
                . . . b b . . . 
                . . b b b b . . 
                . b b b b b b . 
                . . . f f . . . 
                . . c f f c . . 
                . c c f f c c . 
                c c c . . c c c 
                . . . . . . . . 
                `, SpriteKind.Ammmmmmo)
            tiles.placeOnRandomTile(Ammo, sprites.dungeon.darkGroundCenter)
        }
        for (let index = 0; index < 2; index++) {
            Health = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . f f f f f . f f f f f . . 
                . . f f 2 2 2 f f f 2 2 2 f f . 
                . . f 2 2 2 2 2 f 2 2 2 2 2 f . 
                . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                . . f 2 2 2 2 2 2 2 1 1 2 2 f . 
                . . f 2 2 2 2 2 2 2 2 2 2 2 f . 
                . . f f 2 2 2 2 2 2 2 2 2 f f . 
                . . . f f 2 2 2 2 2 2 2 f f . . 
                . . . . f f 2 2 2 2 2 f f . . . 
                . . . . . f f 2 2 2 f f . . . . 
                . . . . . . f f 2 f f . . . . . 
                . . . . . . . f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Hearts)
            tiles.placeOnRandomTile(Health, sprites.dungeon.darkGroundCenter)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    Chest_amount += -1
    tiles.setTileAt(location, sprites.builtin.oceanDepths0)
    if (Chest_amount == 0) {
        game.splash("Thank You For Playing ")
        game.splash("You Win")
        Start()
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    Player_shoot = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    Chest_amount += -1
    tiles.setTileAt(location, sprites.castle.tileGrass1)
    if (Chest_amount == 3) {
        game.splash("Go into menu")
        game.splash("Type 3")
        game.splash("And the code 6432")
    }
})
sprites.onOverlap(SpriteKind.Gooooonfa, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    Hita += 1
    if (Hita == 1) {
        mySprite3 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111211bf.......
            .......f11122211f.......
            ......fd11112111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Player)
        Boomerang += 1
    } else if (Hita == 2) {
        mySprite3 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff2222ff........
            .......fb221222bf.......
            .......f22111222f.......
            ......fd12212221df......
            ......fd11222211df......
            ......fddd1221dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Player)
        Boomerang += 1
    } else if (Hita == 3) {
        Hita = 0
        Boomerang += 1
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.confetti, 500)
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("action", 1000, function () {
        scene.cameraShake(4, 500)
        info.changeLifeBy(-1)
    })
})
scene.onOverlapTile(SpriteKind.Player, tileUtil.door5, function (sprite, location) {
    tileUtil.loadConnectedMap(MapConnectionKind.Door1)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(8, 2))
})
let projectile2: Sprite = null
let Hita = 0
let Health: Sprite = null
let Ammo: Sprite = null
let mySprite3: Sprite = null
let Menu_Number = 0
let Extra: tiles.TileMapData = null
let Castle: tiles.TileMapData = null
let Yeeeeee = 0
let Jungle: tiles.TileMapData = null
let Projectile4: Sprite = null
let projectile: Sprite = null
let Projectile3: Sprite = null
let Weapon = 0
let Boomerang = 0
let Enemy_Exits = 0
let Castle_inside: tiles.TileMapData = null
let Temple_Inside: tiles.TileMapData = null
let Temple: tiles.TileMapData = null
let Player_shoot = 0
let Chest_amount = 0
let mySprite2: Sprite = null
let myMinimap: minimap.Minimap = null
let mySprite: Sprite = null
let Player_direction = 0
Start()
game.onUpdateInterval(500, function () {
    if (tileUtil.currentTilemap() == Temple) {
        for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
            value.follow(mySprite, 25)
        }
    }
})
game.onUpdateInterval(randint(1000, 4000), function () {
    if (Enemy_Exits == 1) {
        for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . 2 . 2 2 2 2 2 2 2 2 . 2 . 
                2 . 2 4 4 4 4 4 4 4 4 2 . 2 
                . 2 4 2 4 4 4 4 4 4 2 4 2 . 
                2 4 2 5 5 5 5 5 5 5 5 2 4 2 
                2 5 4 5 5 5 5 5 5 5 5 4 5 2 
                2 4 5 5 5 4 2 5 4 5 5 5 4 2 
                2 4 4 5 5 2 5 4 5 5 5 4 4 2 
                2 4 4 5 5 5 4 5 2 5 5 4 4 2 
                2 4 5 5 5 4 5 2 4 5 5 5 4 2 
                2 5 4 5 5 5 5 5 5 5 5 4 5 2 
                2 4 2 5 5 5 5 5 5 5 5 2 4 2 
                . 2 4 2 4 4 4 4 4 4 2 4 2 . 
                2 . 2 4 4 4 4 4 4 4 4 2 . 2 
                . 2 . 2 2 2 2 2 2 2 2 . 2 . 
                `, value2, randint(-50, 50), randint(-50, 50))
            projectile2.setKind(SpriteKind.Enemyprojectile)
            projectile2.lifespan = 3000
            projectile2.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), mySprite)

let p2 = sprites.create(img`
    ...
`, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), p2)

let p3 = sprites.create(img`
    ...
`, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), p3)

let p4 = sprites.create(img`
    ...
`, SpriteKind.Player)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), p4)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four))
namespace MultiplayerState {
    export const Weapon = MultiplayerState.create()
    export const Direction = MultiplayerState.create()
    export const Boomerang = MultiplayerState.create()
}
mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.One),
    MultiplayerState.Weapon,
    1
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Two),
    MultiplayerState.Weapon,
    1
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Three),
    MultiplayerState.Weapon,
    1
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Four),
    MultiplayerState.Weapon,
    1
)
info.setLife(3)
mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.One),
    MultiplayerState.life,
    3
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Two),
    MultiplayerState.life,
    3
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Three),
    MultiplayerState.life,
    3
)

mp.setPlayerState(
    mp.playerSelector(mp.PlayerNumber.Four),
    MultiplayerState.life,
    3
)
sprites.onOverlap(
    SpriteKind.Player,
    SpriteKind.Enemy,
    function (sprite, enemy) {

        let player = mp.getPlayerBySprite(sprite)

        mp.changePlayerStateBy(
            player,
            MultiplayerState.life,
            -1
        )

        if (mp.getPlayerState(
            player,
            MultiplayerState.life
        ) <= 0) {

            sprite.destroy(effects.fire, 500)

            mp.setPlayerState(
                player,
                MultiplayerState.life,
                0
            )
        }
    }
)