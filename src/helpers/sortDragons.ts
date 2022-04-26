import DragonType from "../types/DragonType";

const sortDragons = (firstDragon: DragonType, secondDragon: DragonType) =>(
  firstDragon.name.localeCompare(secondDragon.name)
)

export default sortDragons