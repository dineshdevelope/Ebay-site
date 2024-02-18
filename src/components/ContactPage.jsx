import React, { useState } from "react";

const ContactPage = () => {
  const processors = [
    {
      name: "Intel Core i3-13100F Desktop Processor",
      price: 11490,
      imageUrl:
        "https://compumise.in/wp-content/uploads/2023/03/19-118-432-03.png",
      features: [
        "Raptor Lake Processor Base Power: 58W",
        "Maximum Turbo Power: 89W",
        "12MB L3 Cache",
        "5MB L2 Cache",
      ],
    },
    {
      name: "Intel Core i5-12600K Desktop Processor",
      price: 27999,
      imageUrl:
        "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/10/intel-core-i5-14600k.png",
      features: [
        "Alder Lake Processor Architecture: Intel's latest innovation for desktop computing",
        "12 Cores / 16 Threads: High performance for multitasking and gaming",
        "20MB Smart Cache: Accelerated data access for improved responsiveness",
        "Overclocking Support: Unleash even more power with overclocking capabilities",
        "TDP: 125W",
      ],
    },
    {
      name: "AMD Ryzen 3 5300G Desktop Processor",
      price: 15999,
      imageUrl:
        "https://img.telemart.ua/439199-582577-product_popup/amd-ryzen-3-4300g-3840ghz-4mb-sam4-box-100-100000144box.png",
      features: [
        "Zen 3 Architecture: Advanced performance and efficiency",
        "4 Cores / 8 Threads: Balanced performance for everyday computing tasks",
        "6MB Cache: Responsive data access for smooth operation",
        "Integrated Radeon Graphics: Built-in graphics for light gaming and multimedia",
        "TDP: 65W",
      ],
    },

    {
      name: "AMD Ryzen 5 5600X Desktop Processor",
      price: 25990,
      imageUrl:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/LH/EB/KG/40918413/amd-ryzen-5-5600x-desktop-processor-6-cores-12-threads-35-mb-cache-3-7-ghz-upto-4-6-ghz-am4-socket.png",
      features: [
        "Zen 3 Architecture",
        "6 Cores / 12 Threads",
        "35MB Cache",
        "TDP: 65W",
      ],
    },
  ];

  const [counts, setCounts] = useState(Array(processors.length).fill(0));

  const incrementFunction = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const decrementFunction = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] === 0) {
      newCounts[index] = 0;
    } else {
      newCounts[index] -= 1;
    }
    setCounts(newCounts);
  };

  const calculateTotalCost = (index) => {
    const unitPrice = processors[index].price;
    return unitPrice * counts[index];
  };

  const totalProductCost = processors.reduce(
    (total, processor, index) => total + calculateTotalCost(index),
    0
  );

  return (
    <div className="mx-auto max-w-6xl p-1 mt-4">
      {processors.map((processor, index) => (
        <div key={index} className="mb-8 border border-blue-500 rounded-lg p-2">
          <div className="flex items-center">
            <img
              src={processor.imageUrl}
              alt="processor-img"
              className="w-64"
            />
            <div className="space-y-2">
              <h1 className="font-semibold text-2xl">{processor.name}</h1>
              <p className="font-semibold">₹{processor.price.toFixed(2)}</p>
              <ul>
                {processor.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-end m-5 space-x-5 ">
              <p>Quantity</p>
              <button
                className="bg-gray-700 p-2 rounded-md text-white font-semibold text-5xl hover:bg-gray-800"
                onClick={() => decrementFunction(index)}
              >
                -
              </button>
              <p>{counts[index]}</p>
              <button
                className="bg-gray-700 p-2 rounded-md text-white font-semibold text-5xl hover:bg-gray-800"
                onClick={() => incrementFunction(index)}
              >
                +
              </button>
            </div>
            <div>
              <p>Total Cost : ₹{calculateTotalCost(index)}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="font-semibold text-xl  border p-2  border-blue-500 max-w-sm mx-auto rounded-lg ">
        Total Product Cost: ₹{totalProductCost}
      </div>
    </div>
  );
};

export default ContactPage;
