import AnimatedCursor from "react-animated-cursor";
import FadeIn from "react-fade-in";
import Logo from "./Logo";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

function App() {
  return (
    <MouseParallaxContainer globalFactorX={0.25} globalFactorY={0.25}>
      <AnimatedCursor color="255,255,255" />
      <div className="bg-gray-950 text-gray-50 min-h-screen flex flex-col">
        <header className="pt-8 pb-2 px-8 flex items-center justify-center">
          <Logo />
        </header>
        <main className="prose prose-invert mx-auto max-w-xl flex-1 flex items-center">
          <section className="pt-12 pb-24">
            <FadeIn>
              <div className="container mx-auto relative my-8 border border-gray-900 hover:border-gray-800 transition duration-1000 shadow-2xl">
                <MouseParallaxChild
                  factorX={0.1}
                  factorY={0.1}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <div className="w-[2px] h-8 bg-pink-500 absolute -left-8 -top-8" />
                  <div className="h-[2px] w-8 bg-pink-500 absolute -left-8 -top-8" />
                </MouseParallaxChild>
                <MouseParallaxChild
                  factorX={0.1}
                  factorY={0.1}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                >
                  <div className="w-[2px] h-8 bg-sky-500 absolute -right-8 -bottom-8" />
                  <div className="h-[2px] w-8 bg-sky-500 absolute -right-8 -bottom-8" />
                </MouseParallaxChild>
                <div className="w-[4px] h-4 bg-gray-800 absolute -top-[2px] -left-[2px]" />
                <div className="h-[4px] w-4 bg-gray-800 absolute -top-[2px] -left-[2px]" />
                <div className="w-[1px] h-4 bg-gray-900 absolute -bottom-2 -right-2" />
                <div className="h-[1px] w-4 bg-gray-900 absolute -bottom-2 -right-2" />
                <div className="z-10 relative p-12">
                  <h1 className="text-4xl font-bold mb-0">
                    Launch AI projects, fast.
                  </h1>
                  <p className="text-gray-400 text-xl font-extralight mt-2 mb-12">
                    Keep the pace with rapidly developed AI-powered applications
                    and services.
                  </p>
                  <p className="text-sm max-w-md">
                    Postdigital is an initiative focused on developing bespoke
                    cross-platform applications that integrate language models
                    and generative AI services.
                  </p>
                  <a href="https://www.linkedin.com/in/nateweller/">Inquire</a>
                </div>
                
              </div>
            </FadeIn>
          </section>
        </main>
      </div>
    </MouseParallaxContainer>
  );
}

export default App;
