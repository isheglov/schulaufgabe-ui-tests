# schulaufgabe-ui-tests

## Running the Tests

1. Install dependencies (if not already installed):
   ```fish
   npm install
   ```

2. Run all UI tests:
   ```fish
   npx magnitude-test tests/magnitude
   ```

   This will execute all `.mag.ts` test files in the `tests/magnitude` directory.

3. Run a specific test (e.g., the German test):
   ```fish
   npx magnitude-test tests/magnitude/climb-log-de.mag.ts
   ```