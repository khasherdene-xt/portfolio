import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BooksCard = () => {
  return (
    <Link href="/books">
      {" "}
      <div className=" mt-3 w-full h-[7.5rem] rounded-lg   overflow-hidden relative hover:scale-95 duration-500 transform-gpu">
        <Image
          width={500}
          height={300}
          src={"/assets/books.jpg"}
          alt="books"
          className="absolute object-cover bottom-0 left-0 right-0 top-0 -z-30  brightness-90 dark:brightness-75"
        />
        <div className="px-4 py-2 text-white text-md font-[500]">
          <Quote className="rotate-180" />
          <p className="text-xl ">
            A wise man never loses anything, if he has himself
          </p>
          <span className="text-white/85 flex justify-end">
            ― Michel de Montaigne
          </span>
        </div>
      </div>
    </Link>
  );
};
