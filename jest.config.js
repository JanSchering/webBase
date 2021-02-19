module.exports = {
  setupFiles: ['<rootDir>/shared/jest/jest.init.js'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
  },
  verbose: true,
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ['<rootDir>/src'],

  automock: false,
  unmockedModulePathPatterns: ['<rootDir>/node_modules/react', '<rootDir>/node_modules/react-dom', '<rootDir>/node_modules/react-bootstrap'],

  moduleNameMapper: {
    '^.+\\.(css|less)$': '<rootDir>/shared/jest/utils/CSSStub.js',
  },

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|tsx)?$',

  // Module file extensions for importing
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
