
import { ChartLine, AlarmClock, ChevronRight  } from 'lucide-react';
const PostCard = ({image, tags, title, description, date, comments, isNew}) => {
   return (
     <div className="w-full md:w-[48%] lg:w-[31%] flex flex-col bg-white border border-gray-200 shadow-sm overflow-hidden group">
      <div className="relative h-75 w-full overflow-hidden">
        {isNew && (
          <span className="absolute top-5 left-5 bg-red-500 text-white text-sm/6 font-bold tracking-[0.2px] px-2.5 rounded-sm shadow-md z-10">
            NEW
          </span>
        )}
        <img 
         src={image}
         alt={title}
         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
       <div className="p-6 flex flex-col flew-grow">
          <div className="flex gap-4 text-xs/4 font-normal mb-2.5 tracking-[0.2px]">
          {tags.map((tag, index)=> (
            <span
            key={index}
            className={tag.toLowerCase()=== 'google' ? "text-disabled-color" : "text-secondary-text"}
            >
                {tag}
            </span>
          ))}
          </div>
        <h4 className="text-xl/7.5 font-normal text-primary-text mb-2.5 line-clamp-2">
            {title}
        </h4>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 grow">
          {description}
        </p>
        <div className="flex justify-between items-center text-xs/4 text-secondary-text mb-6 font-normal">
          <div className="flex items-center gap-1.5">
            <AlarmClock className="w-4 h-4 text-third-color" fill="none" />
            {date}
          </div>
          <div className="flex items-center gap-1.5">
            <ChartLine className="w-4 h-4 text-money-color" fill="none" />
            {comments} comments
          </div>
        </div>
        <a href="#" className="flex items-center gap-2 text-secondary-text font-bold text-sm/6 hover:text-third-color transition-colors tracking-[0.2px] cursor-pointer">
          Learn More
          <ChevronRight className="w-2.5 h-4 text-third-color hover:text-blue-800"  fill="none"/>
        </a>
        
      </div>
    </div>
  );
};

export default PostCard;