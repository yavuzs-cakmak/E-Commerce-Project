import PostCards from './PostCards'; 
import { featuredPostsData } from '../data/featuredPostsData'; 

const FeaturedPosts = () => {
  return (
    <section className="w-full py-20 px-4 md:px-10 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 lg:mb-20 max-w-2xl mx-auto flex flex-col gap-3">
          <h6 className="text-blue-500 font-bold text-sm tracking-widest">
            Practice Advice
          </h6>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-text">
            Featured Posts
          </h2>
          
          <p className="text-gray-500 text-sm mt-2 px-8 lg:px-0 text-center mx-auto max-w-auto lg:max-w-118">
         Problems trying to resolve the conflict between <br className="hidden md:block" /> the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-center lg:justify-between gap-y-8">
          
          {featuredPostsData.map((post) => (
            <PostCards 
              key={post.id}
              image={post.image}
              tags={post.tags}
              title={post.title}
              description={post.description}
              date={post.date}
              comments={post.comments}
              isNew={post.isNew}
            />
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;