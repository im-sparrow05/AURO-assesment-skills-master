import pandas as pd
from faker import Faker
import random

fake = Faker()

def generate_statement(topic):
    if topic == "array":
        return "Given an array of integers, return the sum of all elements."
    elif topic == "linkedlist":
        return "Given a linked list of integers, find the sum of all elements."
    elif topic == "hashing":
        return "Given a dictionary of integers, return the sum of all values."
    elif topic == "dynamicprogramming":
        return "Given a set of tasks , find the maximum total value given constraints."
    elif topic == "string":
        return "Given a string '', reverse it."
    elif topic == "math":
        return "Write a function to calculate the factorial of ."
    elif topic == "recursion":
        return "Write a function to calculate the Fibonacci sequence up to index ."
    elif topic == "datetime":
        return "Given a date '', calculate the next day."
    elif topic == "graph":
        return "Given a list of intervals , merge overlapping intervals."
    elif topic == "sorting":
        return "Write a function to sort a list of integers  in ascending order."
    elif topic == "statistics":
        return "Given a list of ages , calculate the average age."
    elif topic == "geometry":
        return "Given a list of cities , return the city with the highest population."
    elif topic == "searching":
        return "Given an array of integers , find the maximum element."
    elif topic == "tree":
        return "Given a binary tree , return its maximum depth."
    elif topic == "stringprocessing":
        return "Given a string '', count the occurrences of a specific character."
    elif topic == "set":
        return "Given two strings '' and '', check if they are anagrams."
    elif topic == "set":
        return "Implement a function to check if a number  is prime."
    elif topic == "math":
        return "Implement a function to check if a number  is even or odd."
    elif topic == "math":
        return "Write a function to find the square root of ."
    elif topic == "math":
        return "Implement a function to convert a decimal number  to binary."
    elif topic == "array":
        return "Given a list of words , return the longest word."
    elif topic == "array":
        return "Given a list of names , return the most common name."
    elif topic == "array":
        return "Given a list of temperatures , calculate the average temperature."
    elif topic == "array":
        return "Given an array of integers , find the length of the longest subarray with a sum equal to k."
    elif topic == "linkedlist":
        return "Given a linked list , determine if it has a cycle."
    elif topic == "string":
        return "Given a string '', find the longest palindromic substring."
    elif topic == "array":
        return "Given a matrix , rotate the matrix by 90 degrees clockwise."
    elif topic == "array":
        return "Given a list of intervals , insert a new interval and merge if necessary."
    elif topic == "string":
        return "Given a string '', find the longest common prefix among an array of strings."
    elif topic == "array":
        return "Given a sorted array , find the starting and ending position of a given target value."
    elif topic == "array":
        return "Given a 2D grid of 1s and 0s , find the number of distinct islands."
    elif topic == "array":
        return "Given a list of intervals , find the minimum number of rooms required for all meetings."
    elif topic == "array":
        return "Given a list of integers , return the kth largest element."
    elif topic == "array":
        return "Given a sorted array , find the closest elements to a given target."
    elif topic == "tree":
        return "Given a binary tree , return the level order traversal of its nodes' values."
    elif topic == "array":
        return "Given a list of intervals , return the maximum number of overlapping intervals."
    elif topic == "tree":
        return "Given a binary tree , return the inorder traversal of its nodes' values."
    elif topic == "string":
        return "Given a string '', find all possible permutations."
    elif topic == "array":
        return "Given a list of integers , return the maximum product of three numbers."
    elif topic == "array":
        return "Given a matrix , return the diagonal elements."
    elif topic == "array":
        return "Given a list of integers , return the product of all except itself for each element."
    elif topic == "array":
        return "Given a list of integers , find the longest increasing subsequence."
    elif topic == "array":
        return "Given a list of intervals , return the sum of all non-overlapping intervals."
    elif topic == "array":
        return "Given a list of words , return the number of valid word squares."
    elif topic == "array":
        return "Given a list of integers , find the maximum consecutive ones."
    elif topic == "array":
        return "Given a list of intervals , return the total covered range."
    else:
        return "Valid statement"
def generate_example(statement, topic):
    if "array" in statement:
        input_data = "nums = [1, 2, 3]"
        output_data = "Output: 6"
    elif topic == "linkedlist":
        input_data = "List: 1 -> 2 -> 3"
        output_data = "Output: 6"
    elif topic == "hashing":
        input_data = "Dict: {'a': 1, 'b': 2, 'c': 3}"
        output_data = "Output: 6"
    elif topic == "dynamicprogramming":
        input_data = "Tasks: [(1, 3), (2, 5), (4, 6), (6, 8)]"
        output_data = "Output: 11"
    elif topic == "string":
        input_data = "s = 'hello'"
        output_data = "Output: 'olleh'"
    elif topic == "searching":
        input_data = "nums = [1, 5, 3, 7, 2]"
        output_data = "Output: 7"
    elif topic == "searching":
        input_data = "nums = [-3, 5, 2, 0, 9]"
        output_data = "Output: -3"
    elif topic == "stringprocessing":
        input_data = "s = 'hello'"
        output_data = "Output: 2"
    elif topic == "set":
        input_data = "s1 = 'listen', s2 = 'silent'"
        output_data = "Output: True"
    elif topic == "set":
        input_data = "n = 7"
        output_data = "Output: True"
    elif topic == "math":
        input_data = "n = 8"
        output_data = "Output: Even"
    elif topic == "math":
        input_data = "n = 16"
        output_data = "Output: 4"
    elif topic == "math":
        input_data = "n = 10"
        output_data = "Output: 1010"
    elif topic == "array":
        input_data = "words = ['apple', 'banana', 'orange', 'strawberry']"
        output_data = "Output: 'strawberry'"
    elif topic == "array":
        input_data = "names = ['John', 'Jane', 'Doe', 'John', 'Jane']"
        output_data = "Output: 'John'"
    elif topic == "geometry":
        input_data = "cities = {'New York': 8000000, 'Los Angeles': 4000000, 'Chicago': 3000000}"
        output_data = "Output: 'New York'"
    elif topic == "sorting":
        input_data = "nums = [5, 3, 1, 4, 2]"
        output_data = "Output: [1, 2, 3, 4, 5]"
    elif topic == "statistics":
        input_data = "ages = [20, 30, 40, 50, 60]"
        output_data = "Output: 40"
    elif topic == "array":
        input_data = "weights = [10, 20, 30]"
        output_data = "Output: 60"
    elif topic == "array":
        input_data = "temperatures = [25, 30, 35, 40]"
        output_data = "Output: 32.5"
    elif topic == "array":
        input_data = "nums = [1, -1, 5, -2, 3], k = 3"
        output_data = "Output: 4"
    elif topic == "linkedlist":
        input_data = "List: 1 -> 2 -> 3 -> 4 -> 2"
        output_data = "Output: True"
    elif topic == "string":
        input_data = "s = 'babad'"
        output_data = "Output: 'bab' or 'aba'"
    elif topic == "array":
        input_data = "matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
        output_data = "Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]"
    elif topic == "graph":
        input_data = "intervals = [[1,3],[2,6],[8,10],[15,18]]"
        output_data = "Output: [[1,6],[8,10],[15,18]]"
    elif topic == "array":
        input_data = "nums = [3, 2, 3]"
        output_data = "Output: 3"
    elif topic == "tree":
        input_data = "root = [3,9,20,null,null,15,7]"
        output_data = "Output: 3"
    elif topic == "graph":
        input_data = "intervals = [[1,3],[6,9]], newInterval = [2,5]"
        output_data = "Output: [[1,5],[6,9]]"
    elif topic == "string":
        input_data = "strs = ['flower','flow','flight']"
        output_data = "Output: 'fl'"
    elif topic == "array":
        input_data = "nums = [5,7,7,8,8,10], target = 8"
        output_data = "Output: [3,4]"
    elif topic == "array":
        input_data = "grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]"
        output_data = "Output: 2"
    elif topic == "array":
        input_data = "intervals = [[0,30],[5,10],[15,20]]"
        output_data = "Output: 2"
    elif topic == "array":
        input_data = "nums = [3,2,1,5,6,4], k = 2"
        output_data = "Output: 5"
    elif topic == "array":
        input_data = "arr = [1,2,3,4,5], k = 4, x = 3"
        output_data = "Output: [1,2,3,4]"
    elif topic == "tree":
        input_data = "root = [3,9,20,null,null,15,7]"
        output_data = "Output: [[3],[9,20],[15,7]]"
    elif topic == "array":
        input_data = "intervals = [[1,2],[2,3],[3,4],[1,3]]"
        output_data = "Output: 2"
    elif topic == "tree":
        input_data = "root = [1,null,2,3]"
        output_data = "Output: [1,3,2]"
    elif topic == "string":
        input_data = "s = 'abc'"
        output_data = "Output: ['abc','acb','bac','bca','cab','cba']"
    elif topic == "array":
        input_data = "nums = [1,2,3,4]"
        output_data = "Output: 24"
    elif topic == "array":
        input_data = "matrix = [[1,2,3],[4,5,6],[7,8,9]]"
        output_data = "Output: [1,5,9]"
    elif topic == "array":
        input_data = "nums = [1,2,3,4]"
        output_data = "Output: [24,12,8,6]"
    elif topic == "array":
        input_data = "nums = [10,9,2,5,3,7,101,18]"
        output_data = "Output: 4"
    elif topic == "array":
        input_data = "intervals = [[1,2],[2,3],[3,4],[1,3]]"
        output_data = "Output: 4"
    elif topic == "array":
        input_data = "words = ['area','lead','wall','lady','ball']"
        output_data = "Output: 2"
    elif topic == "array":
        input_data = "nums = [1,1,0,1,1,1]"
        output_data = "Output: 3"
    elif topic == "array":
        input_data = "intervals = [[1,3],[2,6],[8,10],[15,18]]"
        output_data = "Output: 17"
    else:
        input_data = ""
        output_data = ""
    return f"Example: {input_data} {output_data}"


def generate_constraint(topic):
    if topic == "array":
        return "1 <= n <= 231 - 1"
    elif topic == "linkedlist":
        return "1 <= n <= 231 - 1"
    elif topic == "hashing":
        return "1 <= n <= 231 - 1"
    elif topic == "dynamicprogramming":
        return "1 <= n <= 231 - 1"
    elif topic == "string":
        return "1 <= n <= 231 - 1"
    else:
        return "Valid constraint"

def generate_topic():
    return random.choice(["array", "linkedlist", "hashing", "dynamicprogramming", "string"])

def generate_level():
    return random.choice(["Easy", "Medium", "Hard"])

def generate_problem():
    topic = generate_topic()
    statement = generate_statement(topic)
    example = generate_example(statement,topic)
    constraint = generate_constraint(topic)
    level = generate_level()
    return statement, example, constraint, topic, level

def generate_problems(num_problems):
    problems = []
    for _ in range(num_problems):
        problem = generate_problem()
        problems.append(problem)
    return problems

def export_to_csv(problems):
    df = pd.DataFrame(problems, columns=["Statement", "Example", "Constraint", "Topic", "Level"])
    df.to_csv("coding_interview_problems.csv", index=False)

if __name__ == "__main__":
    num_problems = 500
    problems = generate_problems(num_problems)
    export_to_csv(problems)
