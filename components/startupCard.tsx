import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const StartupCard = ({ startup }: { startup: StartupTypeCard }) => {
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(startup._createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium"> {startup.view}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${startup.author?._id}`}>
            <p className="text-16-medium line-clamp-1 ">
              {startup.author.name}
            </p>
          </Link>
          <Link href={`/startup/${startup.author._id}`}>
            <h3 className="text-26-semibold line-clamp-1">{startup.title}</h3>
          </Link>
        </div>
        <Link href={`/user/${startup.author._id}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`startup/${startup._id}`}>
        <p className="startup-card_desc">{startup.description}</p>
      </Link>
      
    </li>
  );
};

export default StartupCard;
