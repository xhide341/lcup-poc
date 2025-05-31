import { ref, onMounted } from "vue";

interface UseAnimatedNumberOptions {
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

export function useAnimatedNumber(targetValue: number, options: UseAnimatedNumberOptions = {}) {
  const { duration = 1500, prefix = "", suffix = "", decimals = 0 } = options;
  const displayValue = ref(`${prefix}0${suffix}`);

  onMounted(() => {
    const speed = targetValue / (duration / 1000);
    let current = 0;
    const incrementPerFrame = speed / 60;

    const animate = () => {
      current += incrementPerFrame;
      if (current >= targetValue) {
        displayValue.value = `${prefix}${targetValue.toFixed(decimals)}${suffix}`;
      } else {
        displayValue.value = `${prefix}${current.toFixed(decimals)}${suffix}`;
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  });

  return displayValue;
}
