// a readonly ref for a dom element, invoque an html element
import React from "react";

export default function DomRef() {
  const inputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" name="" id="" ref={inputRef} />
    </div>
  );
}
