import React from 'react';

const CustomerReviews = () => {

  const reviews = [
    {
      name: 'William John',
      img: 'https://smartdeviceassistant.com/wp-content/uploads/2021/06/skyscraper-view-city-leader-window-frame_1134-1034-1-150x150.jpg',
      review:
        'The team went beyond our imagination to resolving the issues. Their team is very quick in replying. Couldn’t be much happier.',
    },
    {
      name: 'Julia Martha',
      img: 'https://smartdeviceassistant.com/wp-content/uploads/2021/06/businesswoman-with-glasses-crossed-arms-150x150.jpg',
      review:
        'Many thanks for resolving the issue of echo plus. I called their customer support for the issues, the team took quick action and helped me in resolving the issue in a given period of time.',
    },
    {
      name: 'Max',
      img: 'https://smartdeviceassistant.com/wp-content/uploads/2021/06/handsome-businessman-suit-glasses-cross-arms-chest-look_176420-21750-150x150.jpg',
      review:
        'I was facing problems in connecting with the WiFi when setting up your Echo Look. The team heard my issues patiently and helped us in resolving them quickly.',
    },
  ];

  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-[#3730a3] mb-8">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((star, i) => (
                      <span key={i} aria-hidden="true">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-gray-700">{review.review}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
