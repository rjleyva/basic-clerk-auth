import type { JSX } from 'react';

interface StepItem {
  id: string;
  label: string;
}

interface StepsProps {
  heading?: string;
  steps?: StepItem[];
  currentStepIndex?: number;
}

const defaultHeading = 'Your Starter Quest: 4 Quick Steps';

const defaultSteps: StepItem[] = [
  { id: 'register', label: 'Join' },
  { id: 'choose-plan', label: 'Loadout' },
  { id: 'purchase', label: 'Unlock' },
  { id: 'receive-product', label: 'Claim' }
];

const Steps = ({
  heading = defaultHeading,
  steps = defaultSteps,
  currentStepIndex = 1
}: StepsProps): JSX.Element => {
  return (
    <section aria-labelledby="steps-heading" className="py-8">
      <div className="max-w-xl mx-auto p-4 items-center">
        <h2
          id="steps-heading"
          className="text-lg text-center font-semibold mb-4"
        >
          {heading}
        </h2>
        <div className="flex justify-center">
          <ul className="steps">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`step ${index <= currentStepIndex ? 'step-primary' : ''}`}
              >
                {step.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Steps;
