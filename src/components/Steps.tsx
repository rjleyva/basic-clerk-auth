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

const defaultHeading = '4 Easy Steps to Get You Started';

const defaultSteps: StepItem[] = [
  { id: 'register', label: 'Register' },
  { id: 'choose-plan', label: 'Choose Plan' },
  { id: 'purchase', label: 'Purchase' },
  { id: 'receive-product', label: 'Receive Product' }
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
        <ul className="steps" aria-label="Onboarding steps">
          {steps.map(({ id, label }, index) => (
            <li
              key={id}
              className={`step ${index <= currentStepIndex ? 'step-primary' : ''}`}
              aria-current={index === currentStepIndex ? 'step' : undefined}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Steps;
