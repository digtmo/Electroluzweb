import React, { useState, useEffect } from 'react';

const Appfresh = () => {
  const [isLibraryLoaded, setIsLibraryLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.freshworks.com/widgets/150000002185.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setIsLibraryLoaded(true);
    };
    document.body.appendChild(script);

    window.fwSettings = {
      widget_id: 150000002185
    };
    
    const freshworksWidget = function() {
      if (typeof window.FreshworksWidget !== 'function') {
        window.FreshworksWidget = function() {
          window.FreshworksWidget.q.push(arguments);
        };
        window.FreshworksWidget.q = [];
      }
    };
    
    freshworksWidget();
  }, []);

  return (
    <div>
      {isLibraryLoaded ? <p>La biblioteca se ha cargado correctamente.</p> : <p>La biblioteca aún no se ha cargado.</p>}
    </div>
  );
};

export default Appfresh;