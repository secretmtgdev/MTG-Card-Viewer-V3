import { reducer } from "../../utils/engagment";
describe('Engagement reducer function', () => {
    test('increments the engagement count by 1', () => {
        const defaultState = { clickCount: 0 };
        const action = { type: 'INCREMENT' };
        const engagmentCount = reducer(defaultState, action);
        expect(engagmentCount.clickCount).toBe(1);
        expect(engagmentCount.clickCount).not.toBe(0);
    });

    test('increments the engagement count by 5', () => {
        const defaultState = { clickCount: 0 };
        const action = { type: 'INCREMENT' };
        let engagmentCount;
        for(let i = 0; i < 5; i++) {
            engagmentCount = reducer(engagmentCount ? engagmentCount : defaultState, action);
        }

        expect(engagmentCount.clickCount).toBe(5);
    });

    test('returns the same state with invalid action', () => {
        const defaultState = { clickCount: 0 };
        const action = { type: 'NONSENSE' };
        expect(reducer(defaultState, action)).toEqual(defaultState);
    });

});