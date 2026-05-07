import type { bombType } from "../types";
import { useRewardStore } from "../stores/rewardStore";

export function countGeoReward(distance: number, bomb: bombType) {
  const rewardStore = useRewardStore();
  let clickMultiplier = 0;
  let message = "";
  let minutes = 3;

  if (distance < 50) {
    clickMultiplier = 5 + bomb.power;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 200) {
    clickMultiplier = 4;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 500) {
    clickMultiplier = 3;
    message = `Congrats! You were off by only ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else if (distance < 1500) {
    clickMultiplier = 2;
    message = `Congrats! You were off by ${distance} km. For the next ${minutes} minutes you get ${clickMultiplier}x multiplier on your clicks. Click it wisely.`;
  } else {
    message = `Yikes. We had to invent a new unit just for this.`;
  }
  rewardStore.setMultiplier(clickMultiplier, minutes);
  return message;
}
