import React, { useState } from "react";
import "./Twosum.css";

const Twosum = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState("");

  const testCases = [
    {
      input: "nums = [2,7,11,15], target = 9",
      expected: "[0,1]",
    },
    {
      input: "nums = [3,2,4], target = 6",
      expected: "[1,2]",
    },
    {
      input: "nums = [3,3], target = 6",
      expected: "[0,1]",
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
    // Additional functionality like saving the code can be added here
  };

  return (
    <div className="Twosum">
      <div className="qdesc">
        <h1>Two Sum</h1>
        <p className="det">
          <button>Easy</button>
          <button>Companies</button>
          <button>Topics</button>
          <button>Hint</button>
        </p>
        <p className="qtext">
          Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
          You may assume that each input would have exactly one solution, and you may not use the same element twice.
          You can return the answer in any order.
        </p>
        <div className="Testexample">
          <h3>Example 1:</h3>
          <li>Input: nums = [2,7,11,15], target = 9</li>
          <li>Output: [0,1]</li>
          <li>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</li>
          <h3>Example 2:</h3>
          <li>Input: nums = [3,2,4], target = 6</li>
          <li>Output: [1,2]</li>
          <li>Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].</li>
          <h3>Example 3:</h3>
          <li>Input: nums = [3,3], target = 6</li>
          <li>Output: [0,1]</li>
          <li>Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].</li>
        </div>
        <div className="constraint">
          <h3>Constraints:</h3>
          <li>2 ≤ nums.length ≤ 10⁴</li>
          <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
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

export default Twosum;
