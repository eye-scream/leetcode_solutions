class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        arr.sort()
        diff = arr[1]-arr[0]

        return all((arr[i] - arr[i-1]) == diff for i in range(1, len(arr)))