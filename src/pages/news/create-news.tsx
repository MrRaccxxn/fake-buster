import { Container } from "@/components/layout/Container";
import { NewsForm } from "@/features/newsForm";

const CreateNews = () => {
  return (
    <Container className="min-h-screen justify-start items-center">
      <div className="flex flex-col gap-2 justify-center items-center pt-8 pb-12">
        <h3 className="t text-6xl">Publish your news</h3>
        <p className="t text-xl">Fake Buster will combat the truth with you</p>
      </div>
      <div className="border border-yellow rounded-3xl w-[932px] p-8">
        <NewsForm />
      </div>
    </Container>
  );
};

export default CreateNews;
