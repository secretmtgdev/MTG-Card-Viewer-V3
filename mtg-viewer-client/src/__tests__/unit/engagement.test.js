import { reducer } from "../../utils/engagment";
describe('Engagement reducer function', () => {
    let engagementState;
    const defaultState = { clickCount: 0 };
    const action = { type: 'INCREMENT' };
    
    beforeEach(() => {
        engagementState = { clickCount: 0 };
    });

    afterEach(() => {
        engagementState = null;
    });

    test('increments the engagement count by 1', () => {
        engagementState = reducer(defaultState, action);
        expect(engagementState.clickCount).toBe(1);
        expect(engagementState.clickCount).not.toBe(0);
    });

    test('increments the engagement count by 5', () => {
        for(let i = 0; i < 5; i++) {
            engagementState = reducer(engagementState ? engagementState : defaultState, action);
        }

        expect(engagementState.clickCount).toBe(5);
    });

    test('returns the same state with invalid action', () => {
        const INVALID_ACTION = { type: 'INVALID_ACTION' };
        expect(reducer(defaultState, INVALID_ACTION)).toEqual(defaultState);
    });

});