import FramerWrapper from "./animation/FramerWrapper";

const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <FramerWrapper y={8} x={0} duration={0.25}>
      <h1 className="font-rubik text-[#F5EBDD] font-bold text-3xl sm:text-4xl md:text-5xl name_underline tracking-tight">
        {children}
      </h1>
    </FramerWrapper>
  );
};

export default Heading;
