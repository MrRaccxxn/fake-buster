import { DragAndDrop } from "@/components/form/DragNDrop";
import { FormInput } from "@/components/form/FormInput";
import { PublisherAbi } from "@/contractsAbi/Publisher";
import { INewsForm } from "@/types/INews";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useContractWrite } from "wagmi";

export const NewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewsForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const randomId = uuidv4();
  const router = useRouter();
  const {
    data: writeResultData,
    isLoading,
    isSuccess,
    writeAsync,
  } = useContractWrite({
    address:
      (process.env.NEXT_PUBLIC_NEWS_PUBLISHER_ADDRESS as `0x${string}`) ?? "",
    abi: PublisherAbi,
    functionName: "publishNews",
    args: [10],
    onError(error) {
      console.error(error);
      toast.error(`Something went wrong connecting to the Smart Contract`);
    },
  });

  const onSubmit = handleSubmit(async (data: INewsForm) => {
    setIsSubmitting(true);
    // await writeAsync();
    console.log(data);

    const response = await fetch(
      `${process.env.HOST_URL ?? ""}/api/news/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          customId: randomId,
        } as INewsForm),
      }
    );

    if (response.ok) {
      toast.success(`${data.title} has been created!`);
      router.push(`/news/${randomId}`);
    }

    setIsSubmitting(false);
  });

  return (
    <div>
      <div>
        <div className="block text-gray-400  mb-1">WRITE A HEADLINE*</div>
        <FormInput<INewsForm>
          id="title"
          type="text"
          name="title"
          label="Title *"
          placeholder="Any news like: Satoshi Nakamoto is a 16 year old boy."
          className="mb-2 w-full text-gray-100 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a title." }}
          errors={errors}
        />
      </div>

      <div className=" pb-2">
        <div className="block text-gray-400 py-2  mb-1">
          UPLOAD AN IMAGE OF REFERENCE
        </div>
        <FormInput<INewsForm>
          id="title"
          type="text"
          name="image"
          label="https://*"
          placeholder=""
          className="mb-2 w-full text-gray-100 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a Image." }}
          errors={errors}
        />
      </div>

      <div>
        <div className="block text-gray-400 mb-1 mt-2">
          ENTER URL OF THE NEWS
        </div>
        <FormInput<INewsForm>
          id="title"
          type="text"
          name="relatedUrl"
          label="Title *"
          placeholder=""
          className="mb-2 w-full text-gray-100 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a URL." }}
          errors={errors}
        />
      </div>

      <div>
        <div className="block text-gray-400  mb-1">ADD A SHORT DESCRIPTION</div>
        <FormInput<INewsForm>
          id="title"
          type="text"
          name="description"
          label="Title *"
          placeholder=""
          className="mb-2 w-full text-gray-100 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a description." }}
          errors={errors}
        />
      </div>

      <button className="btn btn-secondary my-2 w-full" onClick={onSubmit}>
        {!isSubmitting ?? !isLoading ? (
          <span>Continue</span>
        ) : (
          <span className="loading loading-dots loading-sm"></span>
        )}
      </button>
    </div>
  );
};
