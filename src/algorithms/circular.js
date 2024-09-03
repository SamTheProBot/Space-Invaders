export const lowSinCirParameter = {
  amplitude: 45,
  frequency: 0.25,
  offset: 20,
};

export const circular = (arr, parameter) => {
  const time = performance.now() / 100;
  let direction = -1;

  arr.forEach((i, index) => {
    const phase = (direction * (index * Math.PI * 2)) / arr.length;
    const angle = time * parameter.frequency + phase;
    i.positionX = i.originalPositionX + Math.cos(angle) * parameter.amplitude;
    i.positionY = i.originalPositionY + Math.sin(angle) * parameter.amplitude - parameter.offset;
  });
};
