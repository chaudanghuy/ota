import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="google map"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T4,%20T%C3%B2a%20Nh%C3%A0%20Kailash,%20S%E1%BB%91%203,%20Ng%C3%B5%2082,%20D%E1%BB%8Bch%20V%E1%BB%8Dng%20H%E1%BA%ADu,%20C%E1%BA%A7u%20Gi%E1%BA%A5y,%20H%C3%A0%20N%E1%BB%99i+(OTA%20Studio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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