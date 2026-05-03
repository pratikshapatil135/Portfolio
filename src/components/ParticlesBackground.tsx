import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "#000000",
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
           
          },
          modes: {
            repulse: {
              distance: 100,
            },
          },
        },
        particles: {
          color: {
            value: "#8b5cf6",
          },
          links: {
            color: "#8b5cf6",
            distance: 150,
            enable: true,
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 1,
          },
          number: {
            value: 60,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-20"
    />
  );
};

export default ParticlesBackground;