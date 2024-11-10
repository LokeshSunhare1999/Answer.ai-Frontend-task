import JumpBackIn from "./JumpBackIn";
import Recommended from "./Recommended";
import WelcomeStreak from "./WelcomeStreak";

const recommendations = [
  {
    title: "Logic",
    subtitle: "",
    url: "https://ds055uzetaobb.cloudfront.net/category-images/LLP__Logic_1-NvgXlb.png",
  },
  {
    title: "Computer Science Fundamentals",
    subtitle: "CS & Programming · Level 2",
    url: "https://ds055uzetaobb.cloudfront.net/category-images/computer-science-9mKBqy.png",
  },
  {
    title: "Solving Equations",
    subtitle: "Foundational Math · Level 1",
    url: "https://ds055uzetaobb.cloudfront.net/category-images/foundational-math-lI90N2.png",
  },
];

const HomeDashboard = () => {
  return (
    <div className="flex justify-center gap-24 w-full px-[120px] mt-5 mb-12 ">
      <div>
        <h1 className="py-5 text-2xl font-bold">Welcome, Alex</h1>
        <WelcomeStreak />
      </div>
      <div>
        <h1 className="py-5 text-2xl font-bold">Jump back in</h1>
        <JumpBackIn
          title="Scientific Thinking"
          level="Science · Level 1"
          pathName="Continue path"
        />
        <div>
          <h2 className="py-5 text-2xl font-bold">Recommended for you</h2>
          <Recommended recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
