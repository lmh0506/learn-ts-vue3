import {
  reactive, onMounted, onUnmounted,
} from 'vue';

// 手写防抖
// 事件回调函数（doSomething）在一段时间（300毫秒）后才执行，如果在这段时间内再次调用则重新从0开始计算到300毫秒的时间，当预定的时间内没有再次调用该函数，则执行事件回调函数
function debounce(fn: Function, time: number) {
  let timer: number;

  return (...args: any[]) => {
    // eslint-disable-next-line no-unused-expressions
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, time);
  };
}

// 单位时间内连续触发，但是只会执行一次，比如事件在300秒内不断触发点击事件，那么只会执行一次，到下一个300s开始计时的时候，就会在下一个300s内再执行一次；
// 也就是说600s连续触发事件但是只会执行2次。
function throttle(fn: Function, time: number) {
  let flag = true;
  return (...args: any[]) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn(...args);
      flag = true;
    }, time);
  };
}

export default function useMousePostion() {
  const position = reactive({
    x: 0,
    y: 0,
  });
  const updateMouse = (e: MouseEvent) => {
    position.x = e.pageX;
    position.y = e.pageY;
  };

  const eventFn = throttle(updateMouse, 1000);

  onMounted(() => {
    document.addEventListener('mousemove', eventFn);
  });

  onUnmounted(() => {
    document.removeEventListener('mousemove', eventFn);
  });

  return {
    position,
  };
}
