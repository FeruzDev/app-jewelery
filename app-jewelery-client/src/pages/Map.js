import React from 'react';

const Map = () => {
    return (
        <div className="map container">
            <h2>Местоположение магазинов на сайте GCU</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d4000.4719202550546!2d69.28131260944438!3d41.30956729393686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x38ae8b29190ec371%3A0x60e2b507c0764480!2sYunusabad%20District%2C%20Tashkent%2C%20Uzbekistan!3m2!1d41.3102923!2d69.2793507!5e0!3m2!1sen!2s!4v1641412984490!5m2!1sen!2s"
                 allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
};

export default Map;