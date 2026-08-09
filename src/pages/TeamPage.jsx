import { teamMembers } from './TeamPageData'; 
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  facebook: {
    icon: <FaFacebook size={24} />,
    className: "text-[#335BF5] lg:text-third-color hover:text-blue-700 transition-colors cursor-pointer"
  },
  instagram: {
    icon: <FaInstagram size={24} />,
    className: "text-[#E51F5A] lg:text-third-color hover:text-blue-700 transition-colors cursor-pointer"
  },
  twitter: {
    icon: <FaXTwitter size={24} />,
    className: "text-third-color hover:text-blue-700 transition-colors cursor-pointer"
  }
};
const TeamPage = () => {

  return (
    <div className="w-full min-h-screen bg-gray-50 font-montserrat py-16 lg:py-24">
      
      <div className="max-w-3xl mx-auto text-center px-6 mb-16 lg:mb-24">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-text mb-4">
          Meet Our Team
        </h2>
        <p className="text-sm md:text-base text-secondary-text leading-relaxed max-w-md mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white flex flex-col items-center rounded-sm shadow-sm overflow-hidden">
            
            <div className="w-full aspect-square">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8 flex flex-col items-center text-center">
              <h3 className="text-lg font-bold text-primary-text">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-gray-500 mt-2 mb-4">
                {member.profession}
              </p>
              
              <div className="flex items-center gap-3 lg:gap-4 mt-4">
              {member.socials?.map((social, idx) => {
               const platform = socialIcons[social.name];

               return (
                <a 
                 key={idx}
                 href={social.url} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={platform.className}
                 >
                 {platform.icon}
               </a>
            );
        })}
      </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default TeamPage;