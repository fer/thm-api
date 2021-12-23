module.exports = {
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json"
        }
    },
    moduleFileExtensions: ["js","ts"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    testMatch: [        
        "**/*.spec.(ts|js)"
    ],
    testEnvironment: "node",
    coverageReporters: [
        "lcov",
        "json-summary"
      ]
};