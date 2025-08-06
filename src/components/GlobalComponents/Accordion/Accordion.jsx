import { useState } from 'react';
import AccordionItem from './AccordionItem';
import styles from './Accordion.module.scss';

const Accordion = ({ items, withIcons, bordered }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className={`${styles.accordion} ${bordered ? styles.bordered : ''}`}
    >
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          type={item.type}
          subtitle={item.account}
          content={item.text}
          withIcon={withIcons}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;