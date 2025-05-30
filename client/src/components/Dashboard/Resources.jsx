import resourseImg01 from '../../assets/images/resourceImg01.png'
import resourseImg02 from '../../assets/images/resourceImg02.png'
import resourseImg03 from '../../assets/images/resourceImg03.png'
import resourseImg04 from '../../assets/images/resourceImg04.png'
import resourseImg05 from '../../assets/images/resourceImg05.png'
import resourseImg06 from '../../assets/images/resourceImg06.png'

const Resources = () => {
  const featuredItems = [
    {
      title: "Guided Meditation for Stress Relief",
      description:
        "A 15-minute guided meditation to help you relax and reduce stress.",
      image:resourseImg01,
    },
    {
      title: "Improving Communication in Relationships",
      description:
        "Tips and techniques for effective communication with your partner.",
      image:resourseImg02,
    },
    {
      title: "Journaling for Emotional Well-being",
      description:
        "Learn how journaling can help you process emotions and improve your mental health.",
      image:resourseImg03,
    },
  ];

  const recommendedItems = [
    {
      type: "Article",
      title: "Understanding and Managing Anxiety",
      description:
        "Learn about the different types of anxiety and effective coping strategies.",
      image:resourseImg04,
    },
    {
      type: "Video",
      title: "Building Healthy Relationships",
      description:
        "Explore the key elements of healthy relationships and how to nurture them.",
      image:resourseImg05,
    },
    {
      type: "Podcast",
      title: "Mindfulness for Daily Life",
      description:
        "Discover how to incorporate mindfulness practices into your daily routine.",
      image:resourseImg06,
    },
  ];

  return (
    <div id='resources' className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Featured Resources
        </h2>
        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {featuredItems.map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div>
                  <p className="text-[#101518] text-base font-medium leading-normal">
                    {item.title}
                  </p>
                  <p className="text-[#5c748a] text-sm font-normal leading-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-[#101518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Recommended for You
        </h2>
        {recommendedItems.map((item, index) => (
          <div className="p-4" key={index}>
            <div className="flex items-stretch justify-between gap-4 rounded-xl">
              <div className="flex flex-col gap-1 flex-[2_2_0px]">
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  {item.type}
                </p>
                <p className="text-[#101518] text-base font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[#5c748a] text-sm font-normal leading-normal">
                  {item.description}
                </p>
              </div>
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
