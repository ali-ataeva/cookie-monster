import type { WeaponType } from "../types";
import { useRewardStore } from "../stores/rewardStore";
import { useBombStore } from "../stores/bombStore";

export function countGeoReward(distance: number, bomb: WeaponType) {
  const rewardStore = useRewardStore();
  const bombStore = useBombStore();
  let clickMultiplier = 0;
  let message = "";
  let minutes = 3;

  if (distance < 25) {
    clickMultiplier = 5 + bomb.clicks;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 100) {
    clickMultiplier = 4 + bomb.clicks;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 250) {
    clickMultiplier = 3 + bomb.clicks;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 800) {
    clickMultiplier = 2 + bomb.clicks;
    message = `Congrats! You were off by ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else {
    message = `Yikes. We had to invent a new unit just for this.`;
  }
  if (clickMultiplier > 0) {
    rewardStore.addMultiplier(clickMultiplier, minutes);
  }
  bombStore.clearBomb();
  return message;
}
