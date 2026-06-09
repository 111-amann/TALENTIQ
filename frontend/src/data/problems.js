export const PROBLEMS = {
  "two-sum": {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array • Hash Table",
    description: {
      text: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      notes: [
        "You may assume that each input would have exactly one solution, and you may not use the same element twice.",
        "You can return the answer in any order.",
      ],
    },
    examples: [
      { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
      { input: "nums = [3,2,4], target = 6", output: "[1,2]" },
      { input: "nums = [3,3], target = 6", output: "[0,1]" },
    ],
    constraints: [
      "2 ≤ nums.length ≤ 10⁴",
      "-10⁹ ≤ nums[i] ≤ 10⁹",
      "Only one valid answer exists",
    ],
    starterCode: {
      javascript: `function twoSum(nums, target) {
  // Write your solution here
}

console.log(JSON.stringify(twoSum([2,7,11,15], 9)));  // [0,1]
console.log(JSON.stringify(twoSum([3,2,4], 6)));      // [1,2]
console.log(JSON.stringify(twoSum([3,3], 6)));         // [0,1]`,

      python: `def twoSum(nums, target):
    # Write your solution here
    pass

print(twoSum([2,7,11,15], 9))  # [0, 1]
print(twoSum([3,2,4], 6))      # [1, 2]
print(twoSum([3,3], 6))        # [0, 1]`,

      java: `import java.util.*;

public class Main {
    public static int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }

    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9))); // [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));     // [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));       // [0, 1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[0,1]\n[1,2]\n[0,1]",
      python: "[0, 1]\n[1, 2]\n[0, 1]",
      java: "[0, 1]\n[1, 2]\n[0, 1]",
    },
  },

  "reverse-string": {
    id: "reverse-string",
    title: "Reverse String",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "Write a function that reverses a string. The input string is given as an array of characters s.",
      notes: ["You must do this by modifying the input array in-place with O(1) extra memory."],
    },
    examples: [
      { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]' },
      { input: 's = ["H","a","n","n","a","h"]', output: '["h","a","n","n","a","H"]' },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁵", "s[i] is a printable ASCII character"],
    starterCode: {
      javascript: `function reverseString(s) {
  // Write your solution here
}

let t1 = ["h","e","l","l","o"];
reverseString(t1);
console.log(JSON.stringify(t1)); // ["o","l","l","e","h"]

let t2 = ["H","a","n","n","a","h"];
reverseString(t2);
console.log(JSON.stringify(t2)); // ["h","a","n","n","a","H"]`,

      python: `def reverseString(s):
    # Write your solution here
    pass

t1 = ["h","e","l","l","o"]
reverseString(t1)
print(t1)  # ['o', 'l', 'l', 'e', 'h']

t2 = ["H","a","n","n","a","h"]
reverseString(t2)
print(t2)  # ['h', 'a', 'n', 'n', 'a', 'H']`,

      java: `import java.util.*;

public class Main {
    public static void reverseString(char[] s) {
        // Write your solution here
    }

    public static void main(String[] args) {
        char[] t1 = {'h','e','l','l','o'};
        reverseString(t1);
        System.out.println(Arrays.toString(t1)); // [o, l, l, e, h]

        char[] t2 = {'H','a','n','n','a','h'};
        reverseString(t2);
        System.out.println(Arrays.toString(t2)); // [h, a, n, n, a, H]
    }
}`,
    },
    expectedOutput: {
      javascript: '["o","l","l","e","h"]\n["h","a","n","n","a","H"]',
      python: "['o', 'l', 'l', 'e', 'h']\n['h', 'a', 'n', 'n', 'a', 'H']",
      java: "[o, l, l, e, h]\n[h, a, n, n, a, H]",
    },
  },

  "valid-palindrome": {
    id: "valid-palindrome",
    title: "Valid Palindrome",
    difficulty: "Easy",
    category: "String • Two Pointers",
    description: {
      text: "A phrase is a palindrome if, after converting all uppercase letters to lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.",
      notes: ["Given a string s, return true if it is a palindrome, or false otherwise."],
    },
    examples: [
      { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
      { input: 's = "race a car"', output: "false" },
      { input: 's = " "', output: "true" },
    ],
    constraints: ["1 ≤ s.length ≤ 2 * 10⁵", "s consists only of printable ASCII characters"],
    starterCode: {
      javascript: `function isPalindrome(s) {
  // Write your solution here
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                      // false
console.log(isPalindrome(" "));                               // true`,

      python: `def isPalindrome(s):
    # Write your solution here
    pass

print(isPalindrome("A man, a plan, a canal: Panama"))  # True
print(isPalindrome("race a car"))                       # False
print(isPalindrome(" "))                                # True`,

      java: `public class Main {
    public static boolean isPalindrome(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(isPalindrome("race a car"));                      // false
        System.out.println(isPalindrome(" "));                               // true
    }
}`,
    },
    expectedOutput: {
      javascript: "true\nfalse\ntrue",
      python: "True\nFalse\nTrue",
      java: "true\nfalse\ntrue",
    },
  },

  "maximum-subarray": {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array • Dynamic Programming",
    description: {
      text: "Given an integer array nums, find the subarray with the largest sum, and return its sum.",
      notes: [],
    },
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." },
      { input: "nums = [1]", output: "1" },
      { input: "nums = [5,4,-1,7,8]", output: "23" },
    ],
    constraints: ["1 ≤ nums.length ≤ 10⁵", "-10⁴ ≤ nums[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
  // Write your solution here
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // 6
console.log(maxSubArray([1]));                        // 1
console.log(maxSubArray([5,4,-1,7,8]));               // 23`,

      python: `def maxSubArray(nums):
    # Write your solution here
    pass

print(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))  # 6
print(maxSubArray([1]))                        # 1
print(maxSubArray([5,4,-1,7,8]))               # 23`,

      java: `public class Main {
    public static int maxSubArray(int[] nums) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxSubArray(new int[]{-2,1,-3,4,-1,2,1,-5,4})); // 6
        System.out.println(maxSubArray(new int[]{1}));                       // 1
        System.out.println(maxSubArray(new int[]{5,4,-1,7,8}));              // 23
    }
}`,
    },
    expectedOutput: {
      javascript: "6\n1\n23",
      python: "6\n1\n23",
      java: "6\n1\n23",
    },
  },

  "container-with-most-water": {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array • Two Pointers",
    description: {
      text: "You are given an integer array height of length n. Find two lines that together with the x-axis form a container that holds the most water.",
      notes: ["Return the maximum amount of water a container can store.", "You may not slant the container."],
    },
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" },
      { input: "height = [1,1]", output: "1" },
    ],
    constraints: ["n == height.length", "2 ≤ n ≤ 10⁵", "0 ≤ height[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxArea(height) {
  // Write your solution here
}

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1]));                 // 1`,

      python: `def maxArea(height):
    # Write your solution here
    pass

print(maxArea([1,8,6,2,5,4,8,3,7]))  # 49
print(maxArea([1,1]))                  # 1`,

      java: `public class Main {
    public static int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxArea(new int[]{1,8,6,2,5,4,8,3,7})); // 49
        System.out.println(maxArea(new int[]{1,1}));                 // 1
    }
}`,
    },
    expectedOutput: {
      javascript: "49\n1",
      python: "49\n1",
      java: "49\n1",
    },
  },

  "best-time-to-buy-stock": {
    id: "best-time-to-buy-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array • Sliding Window",
    description: {
      text: "You are given an array prices where prices[i] is the price of a stock on the ith day. You want to maximize your profit by choosing a single day to buy and a single day to sell in the future.",
      notes: ["Return the maximum profit you can achieve. If no profit is possible, return 0."],
    },
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5", explanation: "Buy on day 2 (price=1), sell on day 5 (price=6), profit = 5." },
      { input: "prices = [7,6,4,3,1]", output: "0", explanation: "No profit is possible." },
    ],
    constraints: ["1 ≤ prices.length ≤ 10⁵", "0 ≤ prices[i] ≤ 10⁴"],
    starterCode: {
      javascript: `function maxProfit(prices) {
  // Write your solution here
}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1]));    // 0`,

      python: `def maxProfit(prices):
    # Write your solution here
    pass

print(maxProfit([7,1,5,3,6,4]))  # 5
print(maxProfit([7,6,4,3,1]))    # 0`,

      java: `public class Main {
    public static int maxProfit(int[] prices) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(maxProfit(new int[]{7,1,5,3,6,4})); // 5
        System.out.println(maxProfit(new int[]{7,6,4,3,1}));    // 0
    }
}`,
    },
    expectedOutput: {
      javascript: "5\n0",
      python: "5\n0",
      java: "5\n0",
    },
  },

  "valid-parentheses": {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    category: "Stack • String",
    description: {
      text: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      notes: [
        "An open bracket must be closed by the same type of brackets.",
        "Open brackets must be closed in the correct order.",
        "Every close bracket has a corresponding open bracket.",
      ],
    },
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" },
    ],
    constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of parentheses only '()[]{}'"],
    starterCode: {
      javascript: `function isValid(s) {
  // Write your solution here
}

console.log(isValid("()"));      // true
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false`,

      python: `def isValid(s):
    # Write your solution here
    pass

print(isValid("()"))      # True
print(isValid("()[]{}"))  # True
print(isValid("(]"))      # False`,

      java: `public class Main {
    public static boolean isValid(String s) {
        // Write your solution here
        return false;
    }

    public static void main(String[] args) {
        System.out.println(isValid("()"));      // true
        System.out.println(isValid("()[]{}"));  // true
        System.out.println(isValid("(]"));      // false
    }
}`,
    },
    expectedOutput: {
      javascript: "true\ntrue\nfalse",
      python: "True\nTrue\nFalse",
      java: "true\ntrue\nfalse",
    },
  },

  "climbing-stairs": {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    category: "Dynamic Programming • Math",
    description: {
      text: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
      notes: [],
    },
    examples: [
      { input: "n = 2", output: "2", explanation: "Two ways: [1,1] or [2]." },
      { input: "n = 3", output: "3", explanation: "Three ways: [1,1,1], [1,2], or [2,1]." },
    ],
    constraints: ["1 ≤ n ≤ 45"],
    starterCode: {
      javascript: `function climbStairs(n) {
  // Write your solution here
}

console.log(climbStairs(2));  // 2
console.log(climbStairs(3));  // 3
console.log(climbStairs(5));  // 8`,

      python: `def climbStairs(n):
    # Write your solution here
    pass

print(climbStairs(2))  # 2
print(climbStairs(3))  # 3
print(climbStairs(5))  # 8`,

      java: `public class Main {
    public static int climbStairs(int n) {
        // Write your solution here
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(climbStairs(2));  // 2
        System.out.println(climbStairs(3));  // 3
        System.out.println(climbStairs(5));  // 8
    }
}`,
    },
    expectedOutput: {
      javascript: "2\n3\n8",
      python: "2\n3\n8",
      java: "2\n3\n8",
    },
  },

  "merge-sorted-array": {
    id: "merge-sorted-array",
    title: "Merge Sorted Array",
    difficulty: "Easy",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n representing the number of elements in each array.",
      notes: [
        "Merge nums2 into nums1 as one sorted array in-place.",
        "The final sorted array should not be returned but stored inside nums1.",
        "nums1 has a length of m + n where the last n elements are set to 0.",
      ],
    },
    examples: [
      { input: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", output: "[1,2,2,3,5,6]" },
      { input: "nums1 = [1], m = 1, nums2 = [], n = 0", output: "[1]" },
    ],
    constraints: ["nums1.length == m + n", "nums2.length == n", "0 ≤ m, n ≤ 200"],
    starterCode: {
      javascript: `function merge(nums1, m, nums2, n) {
  // Write your solution here
}

let n1 = [1,2,3,0,0,0];
merge(n1, 3, [2,5,6], 3);
console.log(JSON.stringify(n1)); // [1,2,2,3,5,6]

let n2 = [1];
merge(n2, 1, [], 0);
console.log(JSON.stringify(n2)); // [1]`,

      python: `def merge(nums1, m, nums2, n):
    # Write your solution here
    pass

n1 = [1,2,3,0,0,0]
merge(n1, 3, [2,5,6], 3)
print(n1)  # [1, 2, 2, 3, 5, 6]

n2 = [1]
merge(n2, 1, [], 0)
print(n2)  # [1]`,

      java: `import java.util.*;

public class Main {
    public static void merge(int[] nums1, int m, int[] nums2, int n) {
        // Write your solution here
    }

    public static void main(String[] args) {
        int[] n1 = {1,2,3,0,0,0};
        merge(n1, 3, new int[]{2,5,6}, 3);
        System.out.println(Arrays.toString(n1)); // [1, 2, 2, 3, 5, 6]

        int[] n2 = {1};
        merge(n2, 1, new int[]{}, 0);
        System.out.println(Arrays.toString(n2)); // [1]
    }
}`,
    },
    expectedOutput: {
      javascript: "[1,2,2,3,5,6]\n[1]",
      python: "[1, 2, 2, 3, 5, 6]\n[1]",
      java: "[1, 2, 2, 3, 5, 6]\n[1]",
    },
  },

  "3sum": {
    id: "3sum",
    title: "3Sum",
    difficulty: "Hard",
    category: "Array • Two Pointers • Sorting",
    description: {
      text: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, j != k, and nums[i] + nums[j] + nums[k] == 0.",
      notes: ["The solution set must not contain duplicate triplets."],
    },
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" },
      { input: "nums = [0,1,1]", output: "[]" },
      { input: "nums = [0,0,0]", output: "[[0,0,0]]" },
    ],
    constraints: ["3 ≤ nums.length ≤ 3000", "-10⁵ ≤ nums[i] ≤ 10⁵"],
    starterCode: {
      javascript: `function threeSum(nums) {
  // Write your solution here
}

console.log(JSON.stringify(threeSum([-1,0,1,2,-1,-4]))); // [[-1,-1,2],[-1,0,1]]
console.log(JSON.stringify(threeSum([0,1,1])));            // []
console.log(JSON.stringify(threeSum([0,0,0])));            // [[0,0,0]]`,

      python: `def threeSum(nums):
    # Write your solution here
    pass

print(threeSum([-1,0,1,2,-1,-4]))  # [[-1, -1, 2], [-1, 0, 1]]
print(threeSum([0,1,1]))            # []
print(threeSum([0,0,0]))            # [[0, 0, 0]]`,

      java: `import java.util.*;

public class Main {
    public static List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        System.out.println(threeSum(new int[]{-1,0,1,2,-1,-4})); // [[-1, -1, 2], [-1, 0, 1]]
        System.out.println(threeSum(new int[]{0,1,1}));            // []
        System.out.println(threeSum(new int[]{0,0,0}));            // [[0, 0, 0]]
    }
}`,
    },
    expectedOutput: {
      javascript: '[[-1,-1,2],[-1,0,1]]\n[]\n[[0,0,0]]',
      python: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
      java: "[[-1, -1, 2], [-1, 0, 1]]\n[]\n[[0, 0, 0]]",
    },
  },
};

export const LANGUAGE_CONFIG = {
  javascript: {
    name: "JavaScript",
    icon: "/javascript.png",
    monacoLang: "javascript",
  },
  python: {
    name: "Python",
    icon: "/python.png",
    monacoLang: "python",
  },
  java: {
    name: "Java",
    icon: "/java.png",
    monacoLang: "java",
  },
};