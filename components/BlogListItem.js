import Link from "next/link";
import { format, parseISO, add } from "date-fns";

export const BlogListItem = ({ slug, title, content, date }) => {
  return (
    <div className="border border-black-300 hover:shadow-lg rounded p-4 transition duration-500 ease-in-out">
      <div>
        <Link href={`/blog/${slug}`}>
          <a className="font-bold">{title}</a>
        </Link>
      </div>
      <div className="text-grey-600 text-xs">
        {format(parseISO(date), "MMMM do, uuu")}
      </div>
      <div>{content}</div>
    </div>
  );
};
