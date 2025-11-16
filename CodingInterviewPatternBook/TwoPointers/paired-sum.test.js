// paired-sum.test.js
const { pairedSum } = require('./paired-sum');

describe('pairedSum', () => {
    test('should find indices for target sum in sorted array', () => {
        const nums = [-5, -2, 3, 4, 6];
        const target = 7;
        const result = pairedSum(nums, target);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should handle array with negative numbers', () => {
        const nums = [-3, -1, 0, 2, 4];
        const target = 1;
        const result = pairedSum(nums, target);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });

    test('should return empty array when no pair found', () => {
        const nums = [1, 2, 3, 4];
        const target = 10;
        expect(pairedSum(nums, target)).toEqual([]);
    });

    test('should handle empty array', () => {
        expect(pairedSum([], 5)).toEqual([]);
    });

    test('should handle array with single element', () => {
        expect(pairedSum([1], 1)).toEqual([]);
    });

    test('should handle array with duplicate elements', () => {
        const nums = [1, 2, 2, 4];
        const target = 4;
        const result = pairedSum(nums, target);
        expect(Array.isArray(result)).toBe(true);
        expect(result).toHaveLength(2);
        expect(nums[result[0]] + nums[result[1]]).toBe(target);
    });
});