
//  Lo utilizamos para calcular un valor intermedio entre dos valores conocidos. En este código en particular, lerp se utiliza para calcular el valor intermedio entre la posición previa y la posición actual del cursor, y actualizar la posición previa con este valor intermedio. Esto es para hacer un suavizado suave del cursor y evitar movimientos bruscos.

const linearInterpolation = (a, b, t) => {
  return a + (b - a) * t;
}

const getMousePosition = (event) => {
  return {
    x: event.clientX,
    y: event.clientY,
  };
}

const getWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export { getMousePosition, getWindowSize, linearInterpolation };