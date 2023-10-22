import { Container } from "@/components/layout/Container";
import { NewsForm } from "@/features/newsForm";
import { useAccount } from "wagmi";

const CreateNews = () => {
  const { isConnected } = useAccount();

  return (
    <Container className="min-h-screen justify-start items-center">
      {isConnected ? (
        <>
          <div className="flex flex-col gap-2 justify-center items-center pt-8 pb-12">
            <h3 className="t text-6xl">Publish your news</h3>
            <p className="t text-xl">
              Fake Buster will combat the truth with you
            </p>
          </div>
          <div className="border border-yellow rounded-3xl w-[932px] p-8">
            <NewsForm />
          </div>
        </>
      ) : (
        <>
          <div className="alert alert-warning mt-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Warning: You need to be logged in order to create news!</span>
          </div>
        </>
      )}
    </Container>
  );
};

export default CreateNews;
