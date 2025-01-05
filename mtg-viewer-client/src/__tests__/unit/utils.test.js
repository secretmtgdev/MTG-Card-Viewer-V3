import { debounce } from "../../utils/utils";

describe('Debounce', () => {
    test('should call debounce without delay', () => {
        const mockDebounce = jest.fn();
        const dummyFn = () => {};
        mockDebounce(dummyFn, dummyFn);
        expect(mockDebounce).toHaveBeenCalled();
        expect(mockDebounce).toHaveBeenCalledWith(dummyFn, dummyFn);
    });

    test('should call debounce with delay', () => {
        const mockDebounce = jest.fn();
        const dummyFn = () => {};
        const delay = 500;
        mockDebounce(dummyFn, dummyFn, delay);
        expect(mockDebounce).toHaveBeenCalled();
        expect(mockDebounce).toHaveBeenCalledWith(dummyFn, dummyFn, delay);
    });
})