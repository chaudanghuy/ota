import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="google map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Le%20Capitole%20-%2027%20Th%C3%A1i%20Th%E1%BB%8Bnh%20-%20%C4%90%E1%BB%91ng%20%C4%90a%20-%20H%C3%A0%20N%E1%BB%99i+(Le%20Capitole%20-%2027%20Th%C3%A1i%20Th%E1%BB%8Bnh%20-%20%C4%90%E1%BB%91ng%20%C4%90a%20-%20H%C3%A0%20N%E1%BB%99i)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;