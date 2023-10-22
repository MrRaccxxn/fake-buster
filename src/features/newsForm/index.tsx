import { DragAndDrop } from "@/components/form/DragNDrop";
import { FormInput } from "@/components/form/FormInput";
import { INewsForm } from "@/types/INews";
import { useForm } from "react-hook-form";

export const NewsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewsForm>();

  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
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
          className="mb-2 w-full text-gray-300 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a title." }}
          errors={errors}
        />
      </div>

      <div className=" pb-2">
        <div className="block text-gray-400 py-2  mb-1">
          <p>UPLOAD AN IMAGE OF REFERENCE</p>
        </div>
        <DragAndDrop
          memoryImage={""}
          register={register}
          inputName={"poster"}
          className={""}
          label={"poster"}
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
          className="mb-2 w-full text-gray-300 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a title." }}
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
          className="mb-2 w-full text-gray-300 text-3xl appearance-none bg-transparent focus:outline-none"
          register={register}
          rules={{ required: "You must enter a title." }}
          errors={errors}
        />
      </div>

      <button className="btn btn-secondary my-2 w-full" onClick={onSubmit}>
        Continue
      </button>
    </div>
  );
};
