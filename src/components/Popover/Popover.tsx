import { useEffect, useRef, useState } from "react";
import styles from "./Popover.module.css";

interface PopoverProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

const Popover = ({ trigger, content }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const onToggle = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      <button onClick={onToggle}>{trigger}</button>

      {isOpen && (
        <div ref={contentRef} className={styles.content}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
