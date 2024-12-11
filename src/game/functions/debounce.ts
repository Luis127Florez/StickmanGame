export const debounce = <T extends (...args: any[]) => void>({
  func,
  delay,
  intervalId,
}: {
  func: T;
  delay: number;
  intervalId?: NodeJS.Timeout;
}): NodeJS.Timeout => {
  clearTimeout(intervalId);

  const timeoutId = setTimeout(() => {
    func();
  }, delay);

  return timeoutId;
};
