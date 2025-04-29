import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';  // Import the global state
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <>
      {/* Inline CSS for Blinking Animation */}
      <style>
        {`
          @keyframes blink {
            0% {
              background-color: initial;
            }
            50% {
              background-color: orange;
            }
            100% {
              background-color: initial;
            }
          }

          .blinking {
            animation: blink 2s ease-in-out infinite;
          }
        `}
      </style>

      <AnimatePresence>
        {snap.intro && (
          <motion.section className="home" {...slideAnimation('left')}>
            <motion.header {...slideAnimation("down")}>
              <img 
                src='./threejs.png'
                alt="logo"
                className="w-8 h-8 object-contain"
              />
            </motion.header>

            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  SKETCH <br className="xl:block hidden" /> IT.
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-black text-base">
                  Lag din unike og eksklusive skjorte med Shilwan sin nye 3D-tilpasningsverktøy. <strong>SKETSJ den frem </strong>{" "} .
                </p>

                {/* Trigger the visibility change when the button is clicked */}
                <CustomButton 
                  type="filled"
                  title="Start design"
                  handleClick={() => state.intro = false}  // Handle the intro state change
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm blinking"  // Add blinking class here
                />
              </motion.div>
            </motion.div>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
