def countElements(self, arr: List[int]) -> int:
    s = set(arr)
    ans = 0

    for i, num in enumerate(arr):
        if num + 1 in s:
            ans += 1

    return ans
