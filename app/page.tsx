import Categories from "./components/Categories";
import ToyList from "./components/toys/ToyList";

export default function Home() {
  return (
    <>
      <main className="max-w-[1500px] mx-auto px-6">
        <Categories />

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ToyList />
        </div>
      </main>
      <footer className="">
        
      </footer>
  </>
  );
}
