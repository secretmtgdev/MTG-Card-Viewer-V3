export function apiMock_getCardbyName(name: String) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name) {
                resolve(name);
            } else {
                reject(new Error('Could not find the card'));
            }
        }, 100);
    });
}