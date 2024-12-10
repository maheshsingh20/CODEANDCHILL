import React, { useState } from "react";

const BinarySearch = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState("");

  const testCases = [
    {
      input: "nums = [-1,0,3,5,9,12], target = 9",
      expected: "4",
    },
    {
      input: "nums = [-1,0,3,5,9,12], target = 2",
      expected: "-1",
    },
    {
      input: "nums = [5], target = 5",
      expected: "0",
    },
  ];

  const compileAndTest = async () => {
    setLoading(true);
    setOutput("Compiling...");
    setTestResult("");

    const testResults = [];
    for (const testCase of testCases) {
      const submissionData = {
        language_id: 54, // C++ language ID for Judge0 API
        source_code: code,
        stdin: testCase.input,
      };

      try {
        const response = await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY", // Replace with your RapidAPI key
            "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
          },
          body: JSON.stringify(submissionData),
        });

        const result = await response.json();
        const token = result.token;

        const fetchResult = async () => {
          const res = await fetch(`https://judge0-ce.p.rapidapi.com/submissions/${token}?base64_encoded=false`, {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
              "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
            },
          });

          const data = await res.json();
          return data;
        };

        let outputData;
        while (true) {
          outputData = await fetchResult();
          if (outputData.status.id === 3 || outputData.status.id === 6) {
            break;
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        if (outputData.status.id === 3) {
          const resultOutput = outputData.stdout.trim();
          const passed = resultOutput === testCase.expected;
          testResults.push({ testCase: testCase.input, expected: testCase.expected, result: resultOutput, passed });
        } else {
          testResults.push({ testCase: testCase.input, expected: testCase.expected, result: "Error occurred.", passed: false });
        }
      } catch (error) {
        console.error("Error compiling code:", error);
        testResults.push({ testCase: testCase.input, expected: testCase.expected, result: "Failed to connect to the compiler API.", passed: false });
      }
    }

    const allPassed = testResults.every((test) => test.passed);
    setOutput(allPassed ? "All test cases passed!" : "Some test cases failed.");
    setTestResult(
      testResults
        .map(
          (test) =>
            `Test Case: ${test.testCase}\nExpected: ${test.expected}\nResult: ${test.result}\nStatus: ${
              test.passed ? "Passed" : "Failed"
            }\n`
        )
        .join("\n")
    );
    setLoading(false);
  };

  const handleSubmit = () => {
    if (!code) {
      setOutput("Please write code before submitting!");
      return;
    }
    setOutput("Code submitted successfully!");
  };

  return (
    <div className="BinarySearch">
      <div className="qdesc">
        <h1>Binary Search</h1>
        <p className="det">
          <button>Easy</button>
          <button>Companies</button>
          <button>Topics</button>
          <button>Hint</button>
        </p>
        <p className="qtext">
          Given a sorted array of integers `nums` and an integer `target`, write a function to search `target` in `nums`. 
          If `target` exists, return its index. Otherwise, return -1. 
          You must write an algorithm with O(log n) runtime complexity.
        </p>
        <div className="Testexample">
          <h3>Example 1:</h3>
          <li>Input: nums = [-1,0,3,5,9,12], target = 9</li>
          <li>Output: 4</li>
          <li>Explanation: 9 exists in nums and its index is 4.</li>
          <h3>Example 2:</h3>
          <li>Input: nums = [-1,0,3,5,9,12], target = 2</li>
          <li>Output: -1</li>
          <li>Explanation: 2 does not exist in nums, so return -1.</li>
          <h3>Example 3:</h3>
          <li>Input: nums = [5], target = 5</li>
          <li>Output: 0</li>
          <li>Explanation: 5 exists in nums and its index is 0.</li>
        </div>
        <div className="constraint">
          <h3>Constraints:</h3>
          <li>1 ≤ nums.length ≤ 10⁴</li>
          <li>-10⁴ ≤ nums[i], target ≤ 10⁴</li>
          <li>All integers in nums are unique.</li>
          <li>nums is sorted in ascending order.</li>
        </div>
      </div>
      <div className="qeditor">
        <textarea
          placeholder="Write your C++ code here..."
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <div className="actions">
          <button className="run-btn" onClick={compileAndTest} disabled={loading}>
            {loading ? "Running..." : "Run Tests"}
          </button>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="output">
          <h3>Output:</h3>
          <pre>{output}</pre>
          <h3>Test Results:</h3>
          <pre>{testResult}</pre>
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
