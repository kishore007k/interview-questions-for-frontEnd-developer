# # To find Autobiographical numbers with length N
def ReverseCharBridge(n):
    for i in range(n):
        for j in range(ord("A"), ord("A") + (2 * n) - 1):
            if j >= (ord("A") + n - 1) + i:
                print(chr((ord("A") + n - 1) - (j % (ord("A") + n - 1))), end="")

            elif j <= (ord("A") + n - 1) - i:
                print(chr(j), end="")
            else:
                print(end=" ")
        print("\n", end="")


# Driver Code
n = 6
ReverseCharBridge(n)
