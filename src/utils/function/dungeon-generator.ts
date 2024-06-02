import { rooms, hallways, traps, dangers, chests, encounters } from "../const"
import type { Dungeon } from "../entity"

export function dungeonGenerator() {
  // Create a dungeon array
  const dungeon: Dungeon = []
  // Generate a dungeon
  generateRoom({ dungeon, startRoom: true })
  // Return the dungeon
  return dungeon
}

function generateRoom({
  dungeon,
  startRoom = false,
}: { dungeon: Dungeon; startRoom?: boolean }) {
  // Generate a random index to get a room between 0 and 4
  const roomIndex = Math.floor(Math.random() * 5)
  // Generate a last room when the dungeon has more than 10 pieces
  const lastRoom = dungeon.length > 10
  // Generate a special room, with 20% of chance
  const specialRoom = Math.random() > 0.8 && !startRoom && !lastRoom
  // Generate a danger for the room, with 20% of chance
  const danger = Math.random() > 0.8 ? generateDanger() : null
  // Generate a chest for the room, with 20% of chance
  const chest = Math.random() > 0.8 ? generateChest() : null
  // Generate an encounter for the room, with 20% of chance
  const encounter = Math.random() > 0.8 ? generateEncounter() : null

  // Generate a start room
  if (startRoom) {
    const room = rooms.startRoom[roomIndex]
    dungeon.push(room)
    // Generate hallways
    for (let roomIndex = 0; roomIndex < room.exits; roomIndex++) {
      generateHallway({ dungeon })
    }
    return
  }

  // Generate a special room
  if (specialRoom) {
    const room = rooms.specialRooms[roomIndex]
    dungeon.push(room)
    // Generate hallways
    for (let roomIndex = 0; roomIndex < room.exits; roomIndex++) {
      generateHallway({ dungeon })
    }
    return
  }

  // Generate a last room
  if (lastRoom)
    return dungeon.push({
      ...rooms.lastRooms[roomIndex],
      danger,
      chest,
      encounter,
    })

  // Generate a room
  const room = rooms.defaultRooms[roomIndex]
  dungeon.push({
    ...room,
    danger,
    chest,
    encounter,
  })
  // Generate hallways
  for (let roomIndex = 0; roomIndex < room.exits; roomIndex++) {
    generateHallway({ dungeon })
  }
}

function generateHallway({ dungeon }: { dungeon: Dungeon }) {
  // Generate a hallway index to get a hallway between 0 and 4
  const hallwayIndex = Math.floor(Math.random() * 5)
  // Generate a trap for the hallway, with 20% of chance
  const trap = Math.random() > 0.8 ? generateTrap({ type: "hall" }) : null

  // Get the hallway based on the index
  const hallway = hallways[hallwayIndex]
  dungeon.push({ ...hallway, trap })

  // Generate rooms
  for (let hallwayIndex = 0; hallwayIndex < hallway.exits; hallwayIndex++) {
    generateRoom({ dungeon })
  }
}

function generateTrap({ type }: { type: "hall" | "chest" | "door" }) {
  // Generate a random trap index between 0 and 4
  const trapIndex = Math.floor(Math.random() * 5)

  // Return the trap, based on the type, the default is a hall trap
  switch (type) {
    case "chest":
      return traps.chestTraps[trapIndex]
    case "door":
      return traps.doorTraps[trapIndex]
    case "hall":
      return traps.hallTraps[trapIndex]
  }
}

function generateDanger() {
  // Generate a danger index between 0 and 4
  const dangerIndex = Math.floor(Math.random() * 5)
  // Return the danger
  return dangers[dangerIndex]
}

function generateEncounter() {
  // Generate a danger index between 0 and 4
  const encounterIndex = Math.floor(Math.random() * 5)
  // Return the danger
  return encounters[encounterIndex]
}

function generateChest() {
  // Generate a danger index between 0 and 4
  const chestIndex = Math.floor(Math.random() * 5)
  // Generate a trap for the chest, with 20% of chance
  const trap = Math.random() > 0.8 ? generateTrap({ type: "chest" }) : null
  // Return the danger
  return {
    ...chests[chestIndex],
    trap,
  }
}
