export function debounce(fn, telemetryHandler, delay=500) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        if (telemetryHandler) {
            telemetryHandler();
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}