/**
 * Use a custom reporter to display jasmine results to the terminal.
 * This is inspired from https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/typescript
 */
import {
  DisplayProcessor,
  SpecReporter,
  StacktraceOption,
} from "jasmine-spec-reporter";
import SuiteInfo = jasmine.SuiteInfo;

// Custom log processor
class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: SuiteInfo, log: string): string {
    return `TypeScript ${log}`;
  }
}

// Add the custom reporter to Jasmine
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.NONE,
    },
    customProcessors: [CustomProcessor],
  })
);
