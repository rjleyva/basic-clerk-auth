const processTitle: string = 'Just 4 Easy Steps to Get You Started';

const Steps = () => {
  return (
    <section aria-labelledby="steps-heading" className="py-8">
      <div className="max-w-xl mx-auto p-4 items-center">
        <h2
          id="steps-heading"
          className="text-lg text-center font-semibold mb-4"
        >
          {processTitle}
        </h2>

        <ol
          className="steps list-decimal list-inside"
          aria-label="Onboarding steps"
        >
          <li className="step step-primary" aria-current="step">
            Register
          </li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ol>
      </div>
    </section>
  );
};

export default Steps;
