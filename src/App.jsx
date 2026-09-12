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
        if (!response.ok) throw new Error('Could not load technology data.');
        return response.json();
      })
      .then((data) => {
        if (!cancelled) setTechnologies(data);
      })
      .catch(() => {
        if (!cancelled) toast.error('Could not load technologies. Please refresh the page.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const addToStack = (tech) => {
    setStack((current) => {
      if (current.some((item) => item.id === tech.id)) {
        toast.warning(`${tech.name} is already in your stack.`);
        return current;
      }
      toast.success(`${tech.name} added to your stack.`);
      return [...current, tech];
    });
  };

  const removeFromStack = (tech) => {
    setStack((current) => current.filter((item) => item.id !== tech.id));
    toast.info(`${tech.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning('Your stack is already empty.');
      return;
    }
    setStack([]);
    toast.info('All technologies were removed from your stack.');
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
