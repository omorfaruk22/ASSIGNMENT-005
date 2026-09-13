import React from 'react';
import { toast } from 'react-toastify';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import InfoSection from './components/InfoSection/InfoSection';
import Footer from './components/Footer/Footer';

function App() {
  const [technologies, setTechnologies] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [stack, setStack] = React.useState([]);

  React.useEffect(() => {
    let cancelled = false;

    fetch('/data/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load technology data.');
        }

        return response.json();
      })
      .then((data) => {
        if (!cancelled) {
          setTechnologies(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          toast.error(
            'Could not load technologies. Please refresh the page.',
            {
              toastId: 'technology-load-error'
            }
          );
        }
      })
      .finally(() => {
        if (!cancelled) {
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const addToStack = (tech) => {
    setStack((currentStack) => {
      const alreadyExists = currentStack.some(
        (item) => item.id === tech.id
      );

      if (alreadyExists) {
        toast.warning(
          `${tech.name} is already in your stack.`,
          {
            toastId: `duplicate-${tech.id}`
          }
        );

        return currentStack;
      }

      toast.success(
        `${tech.name} added to your stack.`,
        {
          toastId: `add-${tech.id}`
        }
      );

      return [...currentStack, tech];
    });
  };

  const removeFromStack = (tech) => {
    setStack((currentStack) => {
      const updatedStack = currentStack.filter(
        (item) => item.id !== tech.id
      );

      toast.info(
        `${tech.name} removed from your stack.`,
        {
          toastId: `remove-${tech.id}`
        }
      );

      return updatedStack;
    });
  };

  const removeAll = () => {
    setStack((currentStack) => {
      if (currentStack.length === 0) {
        toast.warning(
          'Your stack is already empty.',
          {
            toastId: 'empty-stack'
          }
        );

        return currentStack;
      }

      toast.info(
        'All technologies were removed from your stack.',
        {
          toastId: 'remove-all'
        }
      );

      return [];
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          technologies={technologies}
          loading={loading}
          stack={stack}
          onAdd={addToStack}
          onRemove={removeFromStack}
          onRemoveAll={removeAll}
        />

        <InfoSection
          id="projects"
          title="Projects"
          text="Use your chosen technologies to shape a real-world project stack with clear frontend, backend, database, and deployment decisions."
        />

        <InfoSection
          id="about"
          title="About Dev Stack"
          text="Dev Stack helps new and experienced developers compare technologies quickly and create a stack that matches project needs, team skills, and delivery goals."
        />

        <InfoSection
          id="contact"
          title="Contact"
          text="Have a stack idea or want to suggest a technology? Reach out through your preferred developer community channel."
        />
      </main>

      <Footer />
    </>
  );
}

export default App;