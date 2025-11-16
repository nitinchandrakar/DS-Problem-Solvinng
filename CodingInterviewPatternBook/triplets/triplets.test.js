const { findTriplets } = require('./triplets');

describe('findTriplets', () => {
    test('should find triplets that sum to zero in given array', () => {
        const arr = [-3, -1, 0, 1, 2];
        const result = findTriplets(arr);
        expect(Array.isArray(result)).toBe(true);
        // Verify each triplet sums to 0
        result.forEach(triplet => {
            expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
        });
    });

    test('should return empty array when no triplet sums to zero', () => {
        const arr = [1, 2, 3, 4];
        const result = findTriplets(arr);
        expect(result).toEqual([]);
    });

    test('should handle array with all zeros', () => {
        const arr = [0, 0, 0];
        const result = findTriplets(arr);
        expect(Array.isArray(result)).toBe(true);
    });

    test('should handle array with negative and positive numbers', () => {
        const arr = [-2, 0, 1, 1, 2];
        const result = findTriplets(arr);
        expect(Array.isArray(result)).toBe(true);
        result.forEach(triplet => {
            expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
        });
    });

    test('should not include duplicate triplets', () => {
        const arr = [-1, -1, 0, 1, 1];
        const result = findTriplets(arr);
        const stringified = result.map(t => JSON.stringify(t.sort()));
        const uniqueCount = new Set(stringified).size;
        expect(uniqueCount).toBe(result.length);
    });

    test('should handle empty array', () => {
        const arr = [];
        const result = findTriplets(arr);
        expect(result).toEqual([]);
    });

    test('should handle array with single element', () => {
        const arr = [0];
        const result = findTriplets(arr);
        expect(Array.isArray(result)).toBe(true);
    });

    test('should work with unsorted input array', () => {
        const arr = [2, -3, 1, 0, -1];
        const result = findTriplets(arr);
        expect(Array.isArray(result)).toBe(true);
        result.forEach(triplet => {
            expect(triplet[0] + triplet[1] + triplet[2]).toBe(0);
        });
    });
});