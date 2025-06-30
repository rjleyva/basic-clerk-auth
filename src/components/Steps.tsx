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

        <ol className="steps list-decimal list-inside">
          <li className="step step-primary" aria-current="step">
            Register
          </li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ol>

        <p className="text-center mx-auto my-4 font-medium text-gray-500 mt-14">
          Secured by <span className="sr-only">authentication provider</span>{' '}
          <a
            href="https://clerk.com/"
            target="_blank"
            className="text-cyan-700"
          >
            Clerk
          </a>
        </p>
      </div>
    </section>
  );
};

export default Steps;
