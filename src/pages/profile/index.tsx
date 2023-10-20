import { NextPage } from "next";

const UserDetailPage: NextPage = () => {
  return (
    <>
      <main className="profile-page">
        <section className="relative block h-72 sm:h-44 top-0 mb-24 verflow-hidden">
          <div className="absolute bottom-0 bg-red w-full flex flex-col translate-y-20">
            <img
              src="/user-profile-default.png"
              alt="user"
              className="rounded-full border-none mx-auto"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </section>
        <section className="mx-auto mb-16">
          <div className=" flex flex-col min-w-0 w-full rounded-lg">
          </div>
        </section>
      </main>
    </>
  );
};

export default UserDetailPage;
