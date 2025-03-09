import { getNextDays } from "./getNextDays";

describe('getNextDays', () => {
  it('should return the next 5 days', () => {
    const days = getNextDays();
  
    expect(days.length).toBe(5);
  })
  
  it('should return the next 5 days with the correct format', () => {
    const days = getNextDays();
  
    expect(days[0]).toBe('07/03');
  })
})